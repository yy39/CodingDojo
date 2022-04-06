public class Gorilla extends Mammal {
	public Gorilla() {
		super();
	}
	public void throwThings() {
		System.out.println("The gorilla threw something!");
		this.energyLevel -= 5;
	}
	
	public void eatBananas() {
		System.out.println("The gorilla eats some bananas.");
		this.energyLevel += 10;
	}
	
	public void climb() {
		System.out.println("The gorilla climbs a tree.");
		this.energyLevel -= 10;
	}
}
