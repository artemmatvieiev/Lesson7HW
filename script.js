/**
 * Class Human.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 */
class Human {
	constructor(firstName, lastName, age) {
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
	}
}
/**
 * Class Military.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {string} rank 
 */
class Military extends Human {
	constructor(firstName, lastName, age, rank){
		super(firstName, lastName, age, rank)
		this.rank = rank
		this.useWeapons = true
	}
}
/**
 * Class Engineer.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {string} rank 
 */
class Engineer extends Military {
	constructor(firstName, lastName, age, rank){
		super(firstName, lastName, age, rank)
		this.repairKit = true	
	}
}
/**
 * Class Sniper.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {string} rank 
 */
class Sniper extends Military {
	constructor(firstName, lastName, age, rank){
		super(firstName, lastName, age, rank)
		this.rifle = true
	}
}
/**
 * Class Medic.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {string} rank 
 */
class Medic extends Military {
	constructor(firstName, lastName, age, rank){
		super(firstName, lastName, age, rank)
		this.medicineChest = true
	}
}
/**
 * Class Infantryman.
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} age 
 * @param {string} rank 
 */
class Infantryman extends Military {
	constructor(firstName, lastName, age, rank){
		super(firstName, lastName, age, rank)
		this.automaticWeapons = true
	}
}
/**
 * Class MilitaryCenter.
 */
class MilitaryCenter {
	constructor(){
	}
	/**
	 * Method for create military
	 * 
	 * @param {} classMilitary 
	 * @param {string} firstName 
	 * @param {string} lastName 
	 * @param {number} age 
	 * @param {string} rank 
	 * @return {Object}
	 */
	military(
						classMilitary, 
						firstName = "John", 
						lastName  = "Doe", 
						age = "Default", 
						rank = "Soldier"
					) {
		return new classMilitary(firstName, lastName, age, rank)
	}
	/**
	 * Method for create devision
	 * 
	 * @param {number} quantityMedic 
	 * @param {number} quantitySniper 
	 * @param {number} quantityEngineer 
	 * @param {number} quantityInfantryman  
	 * @return {Array} _devision
	 */
	devision(quantityMedic, quantitySniper, quantityEngineer, quantityInfantryman) {
		let _devision = []
		function addMilitary(quantityMilitary, classMilitary) {
			for ( let i = 0; i < quantityMilitary; ++i) {
				_devision.push(this.military(
					classMilitary/*,
					prompt(`Enter first name Military ${i + 1} `),
					prompt(`Enter last name Military ${i + 1} `),
					prompt(`Enter age Military ${i + 1} `),
					prompt(`Enter rank Military ${i + 1} `)*/
				))	
			}
		}
		addMilitary = addMilitary.bind(this)
		addMilitary(quantityMedic, Medic)
		addMilitary(quantitySniper, Sniper)
		addMilitary(quantityEngineer, Engineer)
		addMilitary(quantityInfantryman, Infantryman)
		return _devision
	}
}

let center = new MilitaryCenter()
let devision = center.devision(2,1,2,5)
console.log(devision instanceof Array)// 2-й способ проверить Массив или нет )))
console.table(devision)