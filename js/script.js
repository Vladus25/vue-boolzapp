function initVue() {

  new Vue({

    el: '#app',
    data:{
            'myText': "",
            'search': "",
            'showMenu': false,
            'newMessage':{text:'', status:'sent', time:''},
            'newAnswer':{text:'ok', status:'received'},
            'activeContact': false,
            'contacts': [
                {
                    name: 'Jusy',
                    avatar: 'img/img-1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '16:15',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Adrian',
                    avatar: 'img/img-2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020',
                            time: '16:14',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:30',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: '16:35',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.sdadasdasdasdadasd',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuela',
                    avatar: 'img/img-3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020',
                            time: '10:10',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '10:20',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: '16:15',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/img-4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '15:50',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
          },


    methods: {

      getContact: function (index) {
        this.activeContact=this.contacts[index];
      },
      myNewMess: function () {
        const today = new Date();
        const time = today.getHours() + ":" + today.getUTCMinutes();
        this.newMessage["text"] = this.myText;
        this.newMessage["time"] = time;
        this.activeContact.messages.push({...this.newMessage});
        this.myText="";
        setTimeout(this.answerMess, 1000);
      },
      answerMess: function () {
        const today = new Date();
        const time = today.getHours() + ":" + today.getUTCMinutes();
        this.newAnswer["time"] = time;
        this.activeContact.messages.push({...this.newAnswer});
      },
      filterContacts: function() {
        const filter = this.contacts.filter((element, index) => this.contacts[index].name.toLowerCase().includes(this.search));
        return filter;
      },
      deleteMess: function (index) {
        this.activeContact.messages.splice(index,1);
      }

    }

  });

}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
