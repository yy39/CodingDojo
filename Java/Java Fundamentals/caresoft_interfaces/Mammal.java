
public class Mammal {
	protected int energyLevel;
	public Mammal() {
		this.energyLevel = 100;
	}
	
	protected int displayEnergy() {
		System.out.println("This animal has an energy level of: " + this.energyLevel);
		return this.energyLevel;
	}
}
