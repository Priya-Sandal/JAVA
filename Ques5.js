
let student1 = {
    name: "Manish",
    company: "Gfg"

}
let student2 = JSON.parse(JSON.stringify(student1))
student1.name = "Rakesh"
document.write(student1.name, student2.name)