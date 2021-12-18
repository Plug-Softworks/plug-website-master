function followCursor(){
    const processor = document.getElementById('processor');
	document.addEventListener('mousemove',(e)=>{
        let x_pos = e.clientX;
        let y_pos = e.clientY;
        // console.log(`x: ${x_pos}, y: ${y_pos}`)
        processor.style.transform = `skewX(${x_pos/800}deg)`;
        processor.style.transform = `skewY(${y_pos/600}deg)`;
        processor.style.transform = `translate(-${Math.floor(x_pos/100)}px, -${Math.floor(y_pos/100)}px)`;
    })
}

module.exports = followCursor;