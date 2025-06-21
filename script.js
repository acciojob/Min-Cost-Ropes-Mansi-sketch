function mincost(arr)
{ 
	arr.sort((a,b)=> a-b);
	let sum1 = 0;
	while (arr.length) {
		let first = arr.shift();
		let second = arr.shift();

		let cost = first + second;
		sum1 += cost;

		arr.push(cost);
		arr.sort((a,b)=>a-b);
		
	}
	return sum1;
}

module.exports=mincost;
