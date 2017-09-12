
function Block(index,previousHash,timestramp,data,hash){
	this.index = index;
	this.previousHash = previousHash;
	this.timestramp = timestramp;
	this.data = data;
	this.hash = hash;
};

module.exports = Block;