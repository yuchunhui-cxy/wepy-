
// 验证是否是正确手机号码
function phonReg(number) {
    let flag = true;
    let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (number.length !== 11 || !myreg.test(number)) {
        flag = false;
    }
    return flag;
}

module.exports = {
    phonReg, phonReg,
};
