
exports.getDate = function (){
    const today = new Date();
    const options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    };
    const day = today.toLocaleDateString('en-US', options); 

    return day;
}

exports.getDay = function (){
    const date = new Date();
    const options = {
        weekday : "long",
    }
    const res= date.toLocaleDateString("en-US", options)

    return res
}