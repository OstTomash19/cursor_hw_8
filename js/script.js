class Student {
    constructor (university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.studentIsDismissed = false;
    }
    
    get getMarks() { return !this.studentIsDismissed ? this.marks : null;}

    set setMark(number){!this.studentIsDismissed ? this.marks.push(number) : null;}

    static getInfo(university, course, fullName) { return `Студент ${course}го курсу ${university}, ${fullName}`;}

    averageMark() { return !this.studentIsDismissed ? this.marks.reduce((total, mark) => total + mark)/this.marks.length : null;}

    dismiss = () => this.studentIsDismissed = true;

    recover = () => this.studentIsDismissed = false;
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.scholarShip = 1400;
        this.getScholarship();
    }
    
    getScholarship = () => {
        const minAvMarkForScholarship = 4;
        if(this.averageMark() >= minAvMarkForScholarship && !this.studentIsDismissed) {
            setInterval(() => console.log(`Ви отримали ${this.scholarShip} грн. стипендії`), 30000)
        }
    }
}

const ostap = new Student('Український Католицький Університет', 5, 'Томашівський Остап');
const dima = new BudgetStudent('Університет фізкультури', 5, 'Сливка Дмитро');