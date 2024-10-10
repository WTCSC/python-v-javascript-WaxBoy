function generatePassword(length = 12) {
    let out = '' //output
    
    const characters = 'abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'
    //a-z,A-Z,0-9,_

    for (let _ of Array(length)) {
    //perform function length times    
        
        out += (characters.at(Math.floor(Math.random() * 63)))
    }   //add character by random index 0 - 62 of characters

    return out
}
module.exports = generatePassword;