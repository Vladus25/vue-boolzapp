function initVue() {

  new Vue({

    el: '#app',
    data:{
            'myText': "",
            'search': "",
            'showMenu': false,
            'visibility': false,
            'newMessage':{text:'', status:'sent', time:''},
            'newAnswer':{text:'ok', status:'received'},
            'activeContact': false,
            'contacts': [
              {
                  name: 'Olga',
                  avatar: 'img/img-5.jpg',
                  messages: [
                      {
                          date: '11/04/2020',
                          time: '11:30',
                          text: 'Ciao Olga, oggi ci sarà un recap?)',
                          status: 'sent'
                      },
                      {
                          date: '11/04/2020',
                          time: '12:00',
                          text: 'Perche tanti non hanno capito proprio Vue((',
                          status: 'sent'
                      },
                      {
                          date: '11/04/2020',
                          time: '13:17',
                          text: 'Certo, alle 16:00 io e Gianluca facciamo un piccolo recap)',
                          status: 'received'
                      },
                      {
                          date: '11/04/2020',
                          time: '13:45',
                          text: 'Ottimo)',
                          status: 'sent'
                      }
                  ],
              },
              {
                  name: 'Gianluca',
                  avatar: 'img/img-6.jpg',
                  messages: [
                      {
                          date: '12/04/2020',
                          time: '14:20',
                          text: 'Ciao Vlad, hai fatto qualche errore nel esercizio boolzapp',
                          status: 'received'
                      },
                      {
                          date: '12/04/2020',
                          time: '14:50',
                          text: 'Entri nella stanza privata e discutiamo',
                          status: 'received'
                      },
                      {
                          date: '12/04/2020',
                          time: '15:15',
                          text: 'Ciao Gianluca, ok tra 2m vengo)',
                          status: 'sent'
                      },
                  ],
              },
                {
                    name: 'Jusy',
                    avatar: 'img/img-1.jpg',
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

      getContact: function (contact) {
        this.activeContact= contact;
      },

      myNewMess: function () {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        this.newMessage["text"] = this.myText;
        this.newMessage["time"] = time;
        this.activeContact.messages.push({...this.newMessage});
        this.myText="";
        setTimeout(this.answerMess, 1000);
      },

      answerMess: function () {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        this.newAnswer["time"] = time;
        this.activeContact.messages.push({...this.newAnswer});
      },

      filterContacts: function() {
        const filter = this.contacts.filter((element, index) => this.contacts[index].name.toLowerCase().includes(this.search));
        return filter;
      },

      deleteMess: function (index) {
        this.activeContact.messages.splice(index,1);
      },

      notifications: function(){
        setTimeout(() => { this.visibility = true }, 2000);
      }

    }

  });

}


function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
