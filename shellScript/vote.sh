# program to check whether user is eligible for vote
echo "Enter your age:"
read age

if [ $age -ge 18 ]
then
    echo "You are eligible for voting."
else
    echo "You are not eligible for voting."
fi
