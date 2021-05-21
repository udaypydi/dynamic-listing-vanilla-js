class Mailer {
    constructor(url) {
        this.url = url;
        this.mailerData = [];
        this.sideBarContainer = document.getElementById('sidebar');
    }

    initMailer = () => {
        this.fetchMailer();
    }

    fetchMailer = () => {
        fetch(this.url)
        .then(res => res.json())
        .then(json => {
            this.mailerData = json;
            this.createMailerList();
        })
    }

    createMailerList = () => {
        
        this.mailerData.forEach((data) => {
            const mailerCard = document.createElement('div');
            mailerCard.classList.add('mailer-card');
            
            // create mail subject

            const headerText = document.createElement('p');
            headerText.innerText = data.title;
            headerText.classList.add('mailer-card-title');
            
            mailerCard.append(headerText);
            this.sideBarContainer.append(mailerCard);
        })
    }

}

const mailer = new Mailer('/data.json');
mailer.initMailer();