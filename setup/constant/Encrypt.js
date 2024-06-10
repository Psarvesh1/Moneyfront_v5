const Encrypt = (data, key) =>{
    let CryptoJS = require('crypto-js');
    let encryptkey = CryptoJS.enc.Utf8.parse(key);
    let encoded = CryptoJS.enc.Utf8.parse(data);
    let ciphertext = CryptoJS.TripleDES.encrypt(encoded, encryptkey, { mode: CryptoJS.mode.ECB});
    
    let cipher = ciphertext.toString();

    const final = cipher.replace(/\//g, '@')
          .replace(/\+/g, '_')
          .replace(/\n/g, '');
    
    return final
}

export default Encrypt

