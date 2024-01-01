class Display{
    constructor (){
        for (let key in data){
            for (let el in data[key]){
                switch (el){
                    case 'header':
                        this.initHeader(data[key].header)
                        break
                    case 'startPage':
                        this.initStartPage(data[key].startPage)
                        break
                    case 'about':
                        for (let key2 in data[key].about){
                            switch (key2){
                                case 'shortlyAboutUs':
                                    this.initShortlyAboutUs(data[key].about[key2])
                                    break
                                case 'photos':
                                    this.initPhotos(data[key].about[key2])
                                    break
                                case 'devis':
                                    this.initDevis(data[key].about[key2])
                                    break
                            }
                        }
                        break
                    case 'products':
                        for (let key2 in data[key].products){
                            switch (key2){
                                case 'newArrivals':
                                    this.setProducts(data[key].products[key2],'new', key2)
                                    break
                                case 'bestSellers':
                                    this.setProducts(data[key].products[key2],'best', key2)
                                    break
                            }
                        }
                }
            }
        }
    }
    initHeader (element){
        document.querySelector('#logo_header').setAttributeNS("http://www.w3.org/1999/xlink", "href", element.logoImg);

        for(let key in element.mainNav){
            if(key !== 'headerImages'){
                let el = element.mainNav[key];
                let a =document.createElement('a');
                (el.href) ? a.href = el.href: a.href = '#';
                a.classList.add('headerNav');
                a.innerText = el.name;
                document.querySelector('#mainNavBar').prepend(a);
            }
            else{
                for(let key in element.mainNav.headerImages){
                    let el = element.mainNav.headerImages[key];
                    let img = new Image()
                    img.id = key
                    img.src = el
                    document.querySelector('.header_images_bar').append(img)
                }
            }
        }
    }

    initStartPage(element) {
        for (let key in element){
            let el = element[key]

            let h1 = document.createElement('h1')
            h1.innerText = el.h1

            let p = document.createElement('p')
            p.innerText = el.p

            let butt = document.createElement('button')
            butt.classList.add('collection')
            butt.innerText = 'SHOP COLLECTION'


            document.querySelector(`.${key}`).append(h1, p, butt)
        }
    }

    initShortlyAboutUs(element) {

        let aboutDivs = document.querySelectorAll('.aboutDiv')
        let numCurDiv = 0

        for (let key in element){
            let curDiv = aboutDivs[numCurDiv]
            Object.keys(element[key]).forEach(fragment => {
                switch (fragment){
                    case 'h3':
                        let h3 = document.createElement('h3')
                        h3.innerText = element[key].h3

                        curDiv.append(h3);
                        break
                    case 'p':
                        let p = document.createElement('p')
                        p.innerText = element[key].p

                        curDiv.append(p);
                        break
                }

            })

            document.querySelector('.shortlyAboutUs').append(curDiv)

            numCurDiv += 1
        }
    }

    initPhotos(element) {
        function fill (classNameMain, hisClassName, img, width, height, text){

            let photo = document.createElement('div')
            photo.classList.add(hisClassName)

            let image= new Image(width, height)
            image.src = img

            let textDiv = document.createElement('div')
            textDiv.classList.add('text')

            let h3 = document.createElement('h3')
            h3.innerText = text.h3

            let a = document.createElement('a')
            a.innerText = text.a

            let div1 = document.createElement('div')
            div1.classList.add('line')
            div1.classList.add('grayLine')

            let div2 = document.createElement('div')
            div2.classList.add('line')
            div2.classList.add('whiteLine')

            textDiv.append(h3, a, div1, div2)
            photo.append(image, textDiv)

            console.log(classNameMain)

            document.querySelector(`.${classNameMain}`).append(photo)
        }

        for(let key in element){
            switch (key){
                case 'firstTwo':
                    for (let i = 0; i < 2; i++){
                        fill(key, Object.keys(element[key])[i], element[key][Object.keys(element[key])[i]].img, element[key][Object.keys(element[key])[i]].imgWidth, element[key][Object.keys(element[key])[i]].imgHeight, element[key][Object.keys(element[key])[i]].text)
                    }
                    break
                case 'secondTwo':
                    for (let i = 0; i < 2; i++){
                        fill(key, Object.keys(element[key])[i], element[key][Object.keys(element[key])[i]].img, element[key][Object.keys(element[key])[i]].imgWidth, element[key][Object.keys(element[key])[i]].imgHeight, element[key][Object.keys(element[key])[i]].text)
                    }
                    break
            }
        }
    }

    initDevis(element) {
        let h2 = document.createElement('h2')
        h2.innerText = element.h2
        document.querySelector('#devis').append(h2)
    }

    setProducts(element,typeOfProduct, whereToPlace) {
        for(let key in element){
            let el = element[key]

            let mainDiv = document.createElement('div')
            mainDiv.classList.add('product')
            mainDiv.classList.add(typeOfProduct)

            let chairDiv = document.createElement('div')
            chairDiv.classList.add('chair')

            let divLike = document.createElement('div')
            divLike.classList.add('like')
            let likeImage = new Image()
            likeImage.src = el['chair'].imgLike
            divLike.append(likeImage)

            let chairImage = new Image()
            chairImage.src = el['chair'].imgChair

            let butt = document.createElement('button')
            butt.innerText = 'Add to cart'

            chairDiv.append(divLike, chairImage, butt)

            let h4 = document.createElement('h4')
            h4.innerText = el.h4

            let price = document.createElement('p')
            if (Number.isInteger(el.price)){
                price.textContent = `$${String(el.price)}.00`
            }else price.textContent = `$${String(el.price)}`

            mainDiv.append(chairDiv, h4, price)
            document.querySelector(`.${whereToPlace} > .catalog`).append(mainDiv)
        }
    }
}