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
            const card = `
                <div class="mailer-card">
                    <h1 class="mailer-card-title">${data?.title}</h1>
                </div>
            `;
            mailerCard.innerHTML = card;
            this.sideBarContainer.append(mailerCard);
        })
    }

}

const mailer = new Mailer('/data.json');
mailer.initMailer();
