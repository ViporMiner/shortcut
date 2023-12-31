const version = '3.9.2';

const fs = require('fs');

const directoryPath = './Readme';


const dirList = fs.readdirSync(directoryPath);


// 读取目录中的内容
const readDir = target => {
    console.log(`--------${target}-------`)
    try {
        let linuxList = fs.readdirSync(`${directoryPath}/${target}/linux`)
        let winList = fs.readdirSync(`${directoryPath}/${target}/windows`)

        for (let i = 0; i < linuxList.length; i++) {
            let linuxPath = linuxList[i];

            if (linuxPath.indexOf(version) == -1) {
                fs.unlinkSync(`${directoryPath}/${target}/linux/${linuxPath}`);
                console.log(`已删除${directoryPath}/${target}/linux/${linuxPath}`)
            }
        }

        for (let w = 0; w < winList.length; w++) {
            let wPath = winList[w];
            console.log(winList.length)
            if (wPath.indexOf(version) == -1) {
                fs.unlinkSync(`${directoryPath}/${target}/windows/${wPath}`);
                console.log(`已删除${directoryPath}/${target}/windows/${wPath}`)
            }
        }
    } catch (err) {
        console.log(err)
        console.log(`无法读取${target}`)
    }
    console.log('-------en--------')
}


for (let i = 0; i < dirList.length; i++) {
    let target = dirList[i];

    readDir(target)
}
