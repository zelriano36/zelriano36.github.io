const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

client.login({ clientId: 1040356162312339458 }).catch(console.error);

client.on('ready', () => {
    console.log('[DEBUG] Presence now active!')
    console.log('[WARN] Do not close this Console as it will terminate the rpc')
    console.log('=================== Error Output ===================')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Clique sur le bouton pour rejoindre le discord",
            state: "Randerium Pvp Faction Soon",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image:"randerium_logo_front",
                large_text: "Randerium Soon",
                small_image:"",
                small_text: "",
            },
            buttons: [{
                    label: "",
                    url: ""
                },
                {
                    label: "",
                    url: ""
                },
                //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
                //Note the button won't work for you but don't worry it work for others
            ]
        }
    })
})