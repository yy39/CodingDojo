
public class Sculpture extends Art {
	String material;
	public Sculpture(String title, String author, String description, String material) {
		super(title, author, description);
		this.material = material;
	}
	void viewArt() {
		System.out.println(description);
	}

}
