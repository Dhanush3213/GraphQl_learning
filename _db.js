let games = [
{id:'1',title: 'Zenda, Tears of the Kingdome',platform:['Switch']},
{id:'2',title: 'Zenda, Tears of the Kingdome',platform:['Switch','Xbox']},
{id:'3',title: 'Zenda',platform:['Switch','Xbox','PC']},
{id:'4',title: 'Kingdome',platform:['Switch']},
{id:'5',title: 'Zenda, Tears of the Kingdome',platform:['Switch','Xbox','PC']},
{id:'6',title: 'Zenda, Tears of the Kingdome',platform:['Switch']},

];

let authors=[
    {id:'1',name:'Zenda',verified:true},
    {id:'2',name:'Thrinesh',verified:true},

    {id:'3',name:'Thriensh',verified:false},


]
let reviews=[
    {id:'1' ,rating:9,content:'lorem ipsum dolor sit amet',author_id:'1',game_id:'1'},
    {id:'2' ,rating:0,content:'lorem ipsum dolor sit amet',author_id:'2',game_id:'2'},

    {id:'3' ,rating:5,content:'lorem ipsum dolor sit amet',author_id:'3',game_id:'6'},

    {id:'4' ,rating:4,content:'lorem ipsum dolor sit amet',author_id:'5',game_id:'2'},

    {id:'5' ,rating:7,content:'lorem ipsum dolor sit amet',author_id:'4',game_id:'7'},

    {id:'6' ,rating:3,content:'lorem ipsum dolor sit amet',author_id:'6',game_id:'9'},

    {id:'7' ,rating:9,content:'lorem ipsum dolor sit amet',author_id:'7',game_id:'3'},

    {id:'8' ,rating:4,content:'lorem ipsum dolor sit amet',author_id:'8',game_id:'1'},
    {id:'9' ,rating:8,content:'lorem ipsum dolor sit amet',author_id:'8',game_id:'2'},


]

export default {games,authors,reviews}