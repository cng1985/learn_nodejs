var user = {};
user.age = 18;
user.name = "ada66";
user["school"] = "ada66";
user[0] = "ada77";

for (item in user) {
    console.info(item+":"+user[item]);
}
console.info(user[0]);
