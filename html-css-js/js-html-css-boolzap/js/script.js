var app = new Vue({
	el: '#app',
	data: {
		sentClass: 'sent',
		receivedClass: 'received',
		myMessage: '',
		botMessage: [
			'Ok',
			'Non sono daccordo',
			'Ma cosa stai dicendo??',
			'Non ti capisco, riformula',
			'Beh si considerando che 1 + 1 fa 2',
			'Cosa ti hanno fatto i tuoi genitori per provocarti questo costante bisogno di approvazione?',
			'Secondo me, l\'unica cosa che ti passa per la testa è il pettine',
			'Ma se uno è in regione arancione con allerta rossa, in area blu, essendo al verde, lavorando in nero, può firmare un assegno in bianco secondo te?',
			'De sto passo il prossimo Capodanno mangiamo tampone e lenticchie',
			'Ma perché i gatti hanno i canini e i cani non hanno i gattini?',
		],
		searchedContact: '',
		contacts: [
			{
				name: 'Michele', // i 0
				avatar: '_1',		 // i 0
				visible: true,	 // i 0	
				messages: [			 // i 0
					{
						date: '10/01/2020 15:30:55',                // i 0
						text: 'Hai portato a spasso il cane?',
            status: 'sent',
            dropMenuDisplay: false
					},
					{
						date: '10/01/2020 15:50:00',								// i 1
						text: 'Ricordati di dargli da mangiare',
						status: 'sent',
            dropMenuDisplay: false
						
					},
					{
						date: '10/01/2020 16:15:22',								// i 2
						text: 'Tutto fatto!',
						status: 'received',
            dropMenuDisplay: false
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: false,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						text: 'Ciao come stai?',
						status: 'sent',
            dropMenuDisplay: false
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received',
            dropMenuDisplay: false
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent',
            dropMenuDisplay: false
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: false,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						text: 'La Marianna va in campagna',
						status: 'received',
            dropMenuDisplay: false
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent',
            dropMenuDisplay: false
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received',
            dropMenuDisplay: false
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: false,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent',
            dropMenuDisplay: false
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received',
            dropMenuDisplay: false
					}
				],
			},
		]
	},
	methods: {
		// toggleChat function
		toggleChat: function(i) {
			this.contacts.forEach((el) => {
				if (el.visible) {
					el.visible = false
				}
			})
			this.contacts[i].visible = true
		},
		// get current date function
		currentDate: function() {
			const d = new Date()
			let dateString = d.toLocaleString()
			dateString = dateString.replace(',', '')
			return dateString
		},
		// messages written by the user function
		writeMyMessage: function(i) {
			if (this.myMessage.length > 0) {
				this.contacts[i].messages.push({ date: this.currentDate(), text: this.myMessage, status: 'sent', dropMenuDisplay: false})
				this.myMessage = ''
				setTimeout(() => {
					this.contacts[i].messages.push({ date: this.currentDate(), text: this.botMessage[Math.floor(Math.random() * 10)], status: 'received', dropMenuDisplay: false})
				}, 1000);
			}
		},
		// toggle drop down menu function
		toggleDropMenu: function(el) {
			if (!el.dropMenuDisplay) {
        el.dropMenuDisplay = true
      } else if (el.dropMenuDisplay) {
        el.dropMenuDisplay = false
      }
		},
		// delete message function
		
	}
})

Vue.config.devtools = true;