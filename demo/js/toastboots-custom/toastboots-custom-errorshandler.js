var headerlog = [
            'background: red',
            'color: white',
            'line-height: 20px',
            'text-align: center',
            'font-weight: bold'
        ].join(';'),
    placelog = [
            'background: black',
            'color: lightgray',
            'line-height: 20px'
        ].join(';'),
    infolog = [
            'background: lightgray',
            'color: black',
            'line-height: 20px'
        ].join(';');
function printMessage(id, json)
{
    if (json[id]) {
         console.log ('%c '+json[id].prop+'-> %c '+json[id].msg+' ', placelog, infolog );
    }
}