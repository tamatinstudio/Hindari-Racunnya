const Data = {
	permen 	: true,
	permen1	: true,
	permen2	: true,
	racun	: false,
	racun1	: false,
	racun2	: false,
}

for (let key in Data) {
	if (Data[key]) {
		if (!Data.Edibles) Data.Edibles = [];
		Data.Edibles.push(key);
	} else {
		if (!Data.Inedibles) Data.Inedibles = [];
		Data.Inedibles.push(key);
	}
}

console.log(Data.Edibles, Data.Inedibles);

export default Data;