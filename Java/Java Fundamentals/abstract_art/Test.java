import java.util.ArrayList;
import java.util.Random;

public class Test {
	public static void main(String[] args) {
		ArrayList<Object> museum = new ArrayList<>();
		Painting painting1 = new Painting("Mona Lisa", "Leonardo Davinci", "It's the Mona Lisa", "Oil Paints");
		Painting painting2 = new Painting("I suck at art", "Yusan Yin", "It's a bunch of scribbly lines.", "Watercolor Paints");
		Painting painting3 = new Painting("Apex Montage", "Yusan Yin", "It's a really sick Apex Legends montage", "Video Paint?");
		Sculpture sculpture1 = new Sculpture("The Thinker", "Auguste Rodin", "The famous thinker statue.", "Bronze");
		Sculpture sculpture2 = new Sculpture("Called by the Heavens", "Yusan Yin", "It's a very intricate anime sculpture.", "Clay");
		museum.add(painting1);
		museum.add(painting2);
		museum.add(painting3);
		museum.add(sculpture1);
		museum.add(sculpture2);
		
		/*
		We will need a for loop to iterate through museum
		We will need to select a random index and call the viewArt() method
		We will need something to track the paintings we have already showed
		 */
		ArrayList<Object> shownIndexes = new ArrayList<>();
		Random rand = new Random();
		while (shownIndexes.size() != museum.size()) {
			int randIndex = rand.nextInt(5);
			if (!shownIndexes.contains(randIndex)) {
				shownIndexes.add(randIndex);
				((Art) museum.get(randIndex)).viewArt();
			}
		}
	}
}
