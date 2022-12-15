const { SlashCommandBuilder } = require('discord.js');

console.log("Loaded")
function getText() {
	const rand = Math.random() < 0.5
	var final_text, choice1, choice10, choice11, choice2, choice3, choice4, choice5, choice6, choice7, choice8, choice9, text1, text10, text11, text2, text2multiple, text3, text4, text5, text6, text7, text8, text9, text_str;
	text_str = "";
	final_text = "";

	text1 = ["moro", "moi"];
	text2 = ["vaimo", "äijä", "kamu", "uniikki", "spede", "naapuri"];
	text2multiple = ["äijät", "kamut", "rähinä recordsin äijät", "duudsonit", "jätkät", "neidit"];
	text3 = ["asiallist", "kiva", "siistii", "makeet", "kuulii"];
	text4 = ["hanhenmaksaa", "lihapullii", "nakkei", "tortillavuokaa", "maksaa", "blinejä", "curryy", "kenguruu", "mustekalaa", "vihersimpukkaa", "hampurilaisii", "apinanaivoi", "ruisleipää", "jauhelihaa", "kebabbia", "muurahaiskarhuu", "kaviaarii", "haggist", "kanansiipii", "lampaan suolii", "lehmän kielt", "pässin kiveksii", "oravaa", "supikoiraa", "majavaa", "kissaa", "koiraa", "chihuahuaa"];
	text5 = ["keittona", "ryynimakkaral", "aromipesäs", "hummuksel", "pihvinä", "couscousil", "riisillä", "kastikkees", "majoneesil", "katkaravuil", "pastal", "mädätettynä", "ruisleiväl", "paahdettuna", "kuivatettuna", "hapatettuna", "etikassa", "maustekurkumal", "puurossa", "viinassa", "paistina", "padassa", "kossul", "punkus", "pilalla", "pizzassa", "bbq kastikkees", "hamsterinlihal"];
	text6 = ["kapkaupungis", "kiinas", "arabeis", "napolis", "tampereel", "hesas", "viros", "japanis", "olympialaisis", "tsekeis", "koreas", "ymcas", "turus", "kajaanis", "kuopios", "norsunluurannikol", "qataris", "saksas", "myanmaris", "detroitis", "nykis", "ausseis", "somalias", "vankilas", "sentinel saarel", "venäjäl", "tyynenmeren jätepyörtees", "kierrätyskeskukses", "latvias", "takapihal", "ulkona"];
	text7 = ["suihkussa", "paskalla", "mielenosottamas", "travelaa", "kusel", "ryyppääs", "sienestämäs", "buffetis", "narkkaa", "vaeltamas", "nukkuu", "marjastamas", "reilaa", "surffaa", "töissä", "räppää", "tappelee", "työharjottelussa", "panemas", "vittuilemas", "taistelemas", "vankina", "uhoomas", "työttömänä", "thaihieronnas"];
	text8 = ["keitetään etikassa", "annetaa hautuu pari päivää", "flambeerataan kossulla", "vähä tummaa rommii", "vähä chilii", "vähä colaa", "haudutetaa uunis", "annetaa vetäytyy pari tuntii", "vähä maistetaa", "mädätetään kompostis", "uppopaistetaan", "käräytetään", "kietastaan salaattii", "paukautetaan lihanuijal", "pyöräytetään tehosekottimes"];
	text9 = ["tilataan setit muualta", "heitetään koko paska roskiin", "viel pikku limet", "jäähdytetään", "huikeet jenkat musta pippurii", "viel pikku pyöräytykset", "viel pikku chilit", "viel vähä kossuu", "viel vähä sitruunamehuu", "vähä jeesuksen verta", "hopeeselkägorillan karvoi", "ammutaan tykistä", "viskataa koko roska ikkunast", "viel feenikslinnun höyhenii", "laukastaan kiertoradal", "annetaan lähetil", "viel vähä dodon höyhenii", "viel graavilohta", "viel vähä saksanpähkinöit", "syötetään anopil", "vähä krokotiilinselkää", "viel vähä salaattikastiket", "haudutetaan aromipesäs kevyet 24 tuntii"];
	text10 = ["aiolii", "ketsuppii", "ite tehtyy sinappii", "kaapin peräl olleit mausteit", "viime viikon ruuantähteit", "maustekurkkui", "silokkei", "marjoi", "anopin perintopähkinöit", "sisialist tuotui yrttei", "tomaattii", "vaimon yrttitarhast kuivatettuu oreganoo", "kuopas paahdettui maakastanjoit", "viimesen dinosauruksen suomuja", "orpolasten kyyneleit", "mökin takapihalt poimittuu pitkälehtikihokkii", "japanilaist basilikaa jota löytyy jokasen takapihalt", "pekonii", "vettä", "srirachaa", "jauhoi", "naapurin luumui"];
	text11 = ["vähä semmost bläästii siihe", "vähä itämaist twistii siihe", "vähä äijämäisyyt siihe", "vähä makuu", "pikkasen makuu", "vähä aromii siihe", "pikkasen makuu siihe", "vähä marjaista makuu siihe", "vähä intialaist vivahdet", "miedompaa makuu", "vähä korealaist tykityst", "vähä nostalgist makuu", "vähä kolumbialaist kokemust", "vähä brasilialaist tunnelmaa"];
	choice1 = text1[Math.floor(Math.random()*text1.length)];
	choice2 = text2[Math.floor(Math.random()*text2.length)];
	choice3 = text3[Math.floor(Math.random()*text3.length)];
	choice4 = text4[Math.floor(Math.random()*text4.length)];
	choice5 = text5[Math.floor(Math.random()*text5.length)];
	choice6 = text6[Math.floor(Math.random()*text6.length)];
	choice7 = text7[Math.floor(Math.random()*text7.length)];
	choice8 = text8[Math.floor(Math.random()*text8.length)];
	choice9 = text9[Math.floor(Math.random()*text9.length)];
	choice10 = text10[Math.floor(Math.random()*text10.length)];
	choice11 = text11[Math.floor(Math.random()*text11.length)];
	choice2multiple = text2multiple[Math.floor(Math.random()*text2multiple.length)];

	final_text = choice1 + " " 
	if(rand) {
		final_text += choice2multiple + " :D "
		if(choice2multiple == "rähinä recordsin äijät")
		final_text +=  "iso h ja elastine :D "
		final_text += "mitä " + choice2multiple
	}
	else {
		final_text += choice2 + " :D mitä " + choice2
	}


	final_text += ". " + choice3 + " nähä " 
	if(rand) {
		final_text += "teit :D "
	}
	else {
		final_text += "sua :D "
	}

	final_text += "tänää meikä kokkaa teil " + choice4 + " " + choice5 + ". tän reseptin opin kun olin " + choice6 + " " + choice7 + " :D pistetää sekaa vähän " + choice10 + " tuomaan " + choice11
	if(choice2multiple == "rähinä recordsin äijät" && rand)
		final_text += " :D missä uniikki :D ai siellä alhaalla  "
	
	final_text += " :D ja sit viel " + choice8 + " :D lopuks " + choice9 + ". nonii toivottavasti maistuu. mä rakastan "
	if(rand) {
		final_text += "teit " + choice2multiple + " :D"
	}
	else {
		final_text += "sua "+ choice2 + " :D"
	}      

	return(final_text);
	
	
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setit')
		.setDescription('illan dinnerii äijät :D'),
	async execute(interaction) {
		await interaction.reply(getText());
	},
};