
public class Painting extends Art {
	String paintType;
	public Painting(String title, String author, String description, String paintType) {
		super(title, author, description);
		this.paintType = paintType;
	}
	
	void viewArt() {
		System.out.println(this.description);
	}
}
