class HotelCard {
    constructor(src_1,src_2,src_3,src_4,number,price,state,descr, parentSelector, ...classes) {
        this.src_1 = src_1;
        this.src_2 = src_2;
        this.src_3 = src_3;
        this.src_4 = src_4;
        this.number = number;
        this.descr = descr;
        this.state =state;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
        this.element = document.createElement('div');
        
        
    }

    render() {
        this.element.innerHTML = ` 
        <div class="card">
            
            <div class="card__photo">
                <img src="assets/img/${this.src_1}" class = "card__photo_img" style="display: block">
                <img src="assets/img/${this.src_2}" class = "card__photo_img" style="display: none">
                <img src="assets/img/${this.src_3}" class = "card__photo_img" style="display: none">
                <img src="assets/img/${this.src_4}" class = "card__photo_img" style="display: none">
                <div class = "card__arr">
                    <div class = "wrapper_arr_prev">
                        <img src = "assets/img/arr.svg">
                    </div>
                    <div class = "wrapper_arr_next">
                        <img src = "assets/img/arr.svg">
                    </div>
                </div>
                <div class = "card__pag">
                    <div class = "card__pag_circle card__pag_circle-mod "></div>
                    <div class = "card__pag_circle"></div>
                    <div class = "card__pag_circle"></div>
                    <div class = "card__pag_circle"></div>
                </div>
            </div>
            <div class="card__inf">
                <div class="number">№ <span id="num">${this.number}</span> <span id="prem">${this.state}</span></div> 
                <div class="price">${this.price}₽ <span id="day">в сутки</span></div>
            </div>
            <div class="card__hr"></div>
            <div class="card__reviews">
                <div class = "wrapper_rate">
                    <div class = "rate">
                        <div class = "rate__star">
                            <img src="assets/img/star.svg", alt="star" class="star">
                            <img src="assets/img/star_border.svg", alt="star" class="star_border">
                        </div>
                    </div>
                    <div class = "rate">
                        <div class = "rate__star">
                            <img src="assets/img/star.svg", alt="star" class="star">
                            <img src="assets/img/star_border.svg", alt="star" class="star_border">
                        </div>
                    </div>
                    <div class = "rate">
                        <div class = "rate__star">
                            <img src="assets/img/star.svg", alt="star" class="star">
                            <img src="assets/img/star_border.svg", alt="star" class="star_border">
                        </div>
                    </div>
                    <div class = "rate">
                        <div class = "rate__star">
                            <img src="assets/img/star.svg", alt="star" class="star">
                            <img src="assets/img/star_border.svg", alt="star" class="star_border">
                        </div>
                    </div>
                    <div class = "rate">
                        <div class = "rate__star">
                            <img src="assets/img/star.svg", alt="star" class="star">
                            <img src="assets/img/star_border.svg", alt="star" class="star_border">
                        </div>
                    </div>
                </div>
                    <div class="descr"><b>${this.descr}</b> Отзывов</div>
                </div>
            </div>
        </div>` ;     
        
        this.parent.append(this.element);   
        let star = this.element.querySelectorAll('.rate__star'),
            wrapper_rate = this.element.querySelector('.wrapper_rate'),
            star_main = this.element.querySelectorAll('.star'),
            card_rate = this.element.querySelector('.card_rate'),
            star_border = this.element.querySelectorAll('.star_border'),
            star_wrapper = this.element.querySelector('.rate');
        function pressStar(i) {
            let cons = i;
            star[i].addEventListener('click', () => {
                // star_main[i].classList.remove('star');
                while (i != -1) {
                    star_main[i].classList.remove('star');
                    i--;
                    
                }
                while(cons != star_main.length-1){
                    cons++;
                    star_main[cons].classList.add('star');
                    
                }
            });
        }
        function rate () {
            for (let i = 0;i < star.length;i++) {
                pressStar(i);
            }
        }


        setInterval(rate,100);



        let card__photo_img = this.element.querySelectorAll('.card__photo_img'),
            card_arr_next = this.element.querySelector('.wrapper_arr_next'),
            card_arr_prev = this.element.querySelector('.wrapper_arr_prev'),
            card__pag_circle = this.element.querySelectorAll('.card__pag_circle');

        let num_card = 0;
        card_arr_next.addEventListener('click', () => { 
            if (num_card == 3) {
                card__pag_circle[num_card].classList.remove('card__pag_circle-mod');
                card__photo_img[num_card].style.display = 'none';
                num_card = 0;
                card__pag_circle[num_card].classList.add('card__pag_circle-mod');
                card__photo_img[num_card].style.display = 'block';
                
            }else {
                card__pag_circle[num_card].classList.remove('card__pag_circle-mod');
                card__photo_img[num_card].style.display = 'none';
                card__photo_img[++num_card].style.display = 'block';
                card__pag_circle[num_card].classList.add('card__pag_circle-mod');
            }
        });

    card_arr_prev.addEventListener('click', () => { 
        if (num_card == 0) {
            card__pag_circle[num_card].classList.remove('card__pag_circle-mod');
            card__photo_img[num_card].style.display = 'none';
            num_card = 4;
            card__photo_img[--num_card].style.display = 'block';
            card__pag_circle[num_card].classList.add('card__pag_circle-mod');
        }else {
            card__pag_circle[num_card].classList.remove('card__pag_circle-mod');
            card__photo_img[num_card].style.display = 'none';
            card__photo_img[--num_card].style.display = 'block';
            card__pag_circle[num_card].classList.add('card__pag_circle-mod');
        }

    });
            
}
        



}
new HotelCard('num1.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_1').render();
new HotelCard('num2.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_2').render();
new HotelCard('num4.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_3').render();
new HotelCard('num1.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_4').render();
new HotelCard('num3.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_1').render();
new HotelCard('num1.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_2').render();
new HotelCard('num4.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_3').render();
new HotelCard('num3.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_4').render();
new HotelCard('num3.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_1').render();
new HotelCard('num4.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_2').render();
new HotelCard('num2.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_3').render();
new HotelCard('num3.png','num2.png','num3.png','num4.png', 888, '9 900', 'люкс', 145, '.row_4').render();





