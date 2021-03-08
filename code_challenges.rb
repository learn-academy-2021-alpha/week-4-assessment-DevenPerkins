# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️ Matz is nice and so we are nice

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# create a method called only numbers
# that takes in an array and returns only the numbers sorted from least to greatest

def nums_only arr
    # found built in metods and chained them together. Took some time to figure out that the sort needed to go after the select. The select finds and returns items in the array that are integers. After that the sort organizes the numbers. then the delete method deletes the even numbers.
    arr.select { |element| element.is_a?(Integer)}.sort.delete_if &:even?
end


p nums_only fullArr1
p nums_only fullArr2


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def match_letter arr, let
    store_arr = []
    arr.map do |value|
        if value.include?(let)
            return  store_arr << value
        else

        end
    
    end
    store_arr
end
# what needs to be done is I need to check all of the values in the array and find the words that match the letter that is given as the argumetnt. The two I tried to use the most and refactor to work was the find and the include methods. I tried to combine with conditoinals as well in hopes that it would return the value that matched 

# I've tried so many ways on this one and could not figure it out. have to throw in the towel ]=
p match_letter beverages_array , letter_o



# # -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str
        str.delete "aeiouAEIOU"
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3



# # --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# # Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster speed_increase
        @current_speed += speed_increase
    end
    def brake speed_decrease
        @current_speed -= speed_decrease 
        if @current_speed < 0
            @current_speed = 0
        else
            @current_speed
        end
    end
    def get_info
        puts "This speedy #{@model} has #{@wheels} wheels and is moving at a brisk pace of #{current_speed}mph"
    end
end
marin = Bike.new "Marin"
marin.get_info



# # -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

marin.pedal_faster 10
marin.brake 5
marin.get_info
marin.brake 10
marin.get_info


