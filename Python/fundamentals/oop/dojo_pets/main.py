import ninja
import pet

ninja1 = ninja.Ninja('Kamen', 'Rider', 'Freeze-dried Salmon', 'Fancy Feast',
                     pet.Pet('Meow Meow', 'Cat', ['eat', 'sleep', 'scream'], 100, 100))

ninja1.feed()
ninja1.walk()
ninja1.bathe()
