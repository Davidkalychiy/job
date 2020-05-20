class HotelCard {
    constructor(src,number,price,state,descr, parentSelector, ...classes) {
        this.src = src;
        this.number = number;
        this.descr = descr;
        this.state =state;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
    }

    render() {
        const element = document.createElement('div');
        // element.classList.add('card');
        element.innerHTML = ` 
        <div class="card">
            <div class="card__photo">
                <img src="assets/img/${this.src}">
            </div>
            <div class="card__inf">
                <div class="number">№ <span id="num">${this.number}</span> <span id="prem">${this.state}</span></div> 
                <div class="price">${this.price}₽ <span id="day">в сутки</span></div>
            </div>
            <div class="card__hr"></div>
            <div class="card__reviews">
                <div class="wrapper_star">
                    <div class="wrapper_rate">
                        <div class="star_wrapper">
                            <img src="assets/img/star.svg" alt="star" class="star">
                            <img src="assets/img/star_border.svg" alt="star" class="star_border">
                        </div>
                    </div> 
                    <div class="wrapper_rate">
                        <div class="star_wrapper">
                            <img class="star" src="assets/img/star.svg" alt="star" >
                            <img class="star_border" src="assets/img/star_border.svg" alt="star" >
                        </div>
                    </div> 
                    <div class="wrapper_rate">
                        <div class="star_wrapper">
                            <img src="assets/img/star.svg" alt="star" class="star">
                            <img src="assets/img/star_border.svg" alt="star" class="star_border">
                        </div>
                    </div> 
                    <div class="wrapper_rate">
                        <div class="star_wrapper">
                            <img src="assets/img/star.svg" alt="star" class="star">
                            <img src="assets/img/star_border.svg" alt="star" class="star_border">
                        </div>
                    </div> 
                    <div class="wrapper_rate">
                        <div class="star_wrapper">
                            <img src="assets/img/star.svg" alt="star" class="star">
                            <img src="assets/img/star_border.svg" alt="star" class="star_border">
                        </div>
                    </div> 
                </div>

                <div class="descr"><b>${this.descr}</b> Отзывов</div>
            </div>
        </div>` ;     
        this.parent.append(element);   
    }
}

new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_1').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_1').render();
new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_1').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_2').render();
new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_2').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_2').render();
new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_3').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_3').render();
new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_3').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_4').render();
new HotelCard('card_888.png', 888, '9 900', 'люкс', 145, '.search__result .row_4').render();
new HotelCard('card_840.png', 840, '9 900', '', 65, '.search__result .row_4').render();
