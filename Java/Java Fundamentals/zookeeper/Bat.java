
public class Bat extends Mammal {
	public Bat() {
		super();
		this.energyLevel = 300;
	}
	
	public void fly() {
		System.out.println("Fwoosh!");
		this.energyLevel -= 50;
	}
	
	public void eatHumans() {
		this.energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("Oh my god!!! There's a giant bat attacking the town!");
		System.out.println("AAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
		this.energyLevel -= 100;
	}
}
