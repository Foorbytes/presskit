const mediaKitButton = document.querySelector("[data-media-kit-download]");
const mediaKitStatus = document.querySelector("[data-media-kit-status]");

const mediaKitFiles = [
    ["assets/images/foorbytes-logo.png", "Foorbytes/foorbytes-logo.png"],
    ["assets/images/foorbytes-logo-horizontal.png", "Foorbytes/foorbytes-logo-horizontal.png"],
    ["assets/images/store/app-icon.png", "Bad Credit No Problem/app-icon.png"],
    ["assets/images/bad-credit-hero.png", "Bad Credit No Problem/bad-credit-hero.png"],
    ["assets/images/million-downloads.png", "Bad Credit No Problem/million-downloads.png"],
    ["assets/images/news/steam-launch.png", "Bad Credit No Problem/steam-launch.png"],
    ["assets/images/news/fright-night.png", "Bad Credit No Problem/fright-night-files.png"],
    ["assets/images/screenshots/new-job.png", "Bad Credit No Problem/Screenshots/new-job.png"],
    ["assets/images/screenshots/create-agent.png", "Bad Credit No Problem/Screenshots/create-agent.png"],
    ["assets/images/screenshots/process-job.png", "Bad Credit No Problem/Screenshots/process-job.png"],
    ["assets/images/screenshots/email.png", "Bad Credit No Problem/Screenshots/email.png"],
    ["assets/images/screenshots/earn-money.png", "Bad Credit No Problem/Screenshots/earn-money.png"]
];

const crcTable = (() => {
    const table = new Uint32Array(256);
    for (let index = 0; index < 256; index += 1) {
        let value = index;
        for (let bit = 0; bit < 8; bit += 1) {
            value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }
        table[index] = value >>> 0;
    }
    return table;
})();

const crc32 = (bytes) => {
    let crc = 0xffffffff;
    for (const byte of bytes) {
        crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
};

const getDosDateTime = (date = new Date()) => {
    const year = Math.max(1980, date.getFullYear());
    const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
    const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { dosTime, dosDate };
};

const concatenate = (arrays) => {
    const length = arrays.reduce((total, array) => total + array.length, 0);
    const result = new Uint8Array(length);
    let offset = 0;
    arrays.forEach((array) => {
        result.set(array, offset);
        offset += array.length;
    });
    return result;
};

const createLocalHeader = (nameBytes, data, crc, dosTime, dosDate) => {
    const header = new Uint8Array(30 + nameBytes.length);
    const view = new DataView(header.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0x0800, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, dosTime, true);
    view.setUint16(12, dosDate, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, data.length, true);
    view.setUint32(22, data.length, true);
    view.setUint16(26, nameBytes.length, true);
    view.setUint16(28, 0, true);
    header.set(nameBytes, 30);
    return header;
};

const createCentralHeader = (nameBytes, data, crc, dosTime, dosDate, localOffset) => {
    const header = new Uint8Array(46 + nameBytes.length);
    const view = new DataView(header.buffer);
    view.setUint32(0, 0x02014b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 20, true);
    view.setUint16(8, 0x0800, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, dosTime, true);
    view.setUint16(14, dosDate, true);
    view.setUint32(16, crc, true);
    view.setUint32(20, data.length, true);
    view.setUint32(24, data.length, true);
    view.setUint16(28, nameBytes.length, true);
    view.setUint16(30, 0, true);
    view.setUint16(32, 0, true);
    view.setUint16(34, 0, true);
    view.setUint16(36, 0, true);
    view.setUint32(38, 0, true);
    view.setUint32(42, localOffset, true);
    header.set(nameBytes, 46);
    return header;
};

const buildZip = (files) => {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    const { dosTime, dosDate } = getDosDateTime();
    let localOffset = 0;

    files.forEach(({ name, data }) => {
        const nameBytes = encoder.encode(name);
        const crc = crc32(data);
        const localHeader = createLocalHeader(nameBytes, data, crc, dosTime, dosDate);
        const centralHeader = createCentralHeader(nameBytes, data, crc, dosTime, dosDate, localOffset);
        localParts.push(localHeader, data);
        centralParts.push(centralHeader);
        localOffset += localHeader.length + data.length;
    });

    const centralDirectory = concatenate(centralParts);
    const endRecord = new Uint8Array(22);
    const endView = new DataView(endRecord.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(4, 0, true);
    endView.setUint16(6, 0, true);
    endView.setUint16(8, files.length, true);
    endView.setUint16(10, files.length, true);
    endView.setUint32(12, centralDirectory.length, true);
    endView.setUint32(16, localOffset, true);
    endView.setUint16(20, 0, true);

    return concatenate([...localParts, centralDirectory, endRecord]);
};

if (mediaKitButton) {
    mediaKitButton.addEventListener("click", async () => {
        mediaKitButton.disabled = true;
        mediaKitButton.textContent = "Building ZIP…";

        try {
            const files = [];
            for (let index = 0; index < mediaKitFiles.length; index += 1) {
                const [url, name] = mediaKitFiles[index];
                if (mediaKitStatus) {
                    mediaKitStatus.textContent = `Loading asset ${index + 1} of ${mediaKitFiles.length}…`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Could not load ${url}`);
                }
                files.push({ name, data: new Uint8Array(await response.arrayBuffer()) });
            }

            if (mediaKitStatus) {
                mediaKitStatus.textContent = "Packaging original files…";
            }

            const zipBytes = buildZip(files);
            const downloadUrl = URL.createObjectURL(new Blob([zipBytes], { type: "application/zip" }));
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = "foorbytes-media-assets.zip";
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(downloadUrl);

            if (mediaKitStatus) {
                mediaKitStatus.textContent = "Your ZIP is ready.";
            }
        } catch (error) {
            console.error(error);
            if (mediaKitStatus) {
                mediaKitStatus.textContent = "The ZIP could not be built. Individual asset downloads are still available below.";
            }
        } finally {
            mediaKitButton.disabled = false;
            mediaKitButton.textContent = "Download asset ZIP";
        }
    });
}
