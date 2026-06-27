const doctors=[
    {
        image:"../images/doctor_1.jpg",
        name:"Dr.S.Babu",
        specialization:"Psychologist",
        experience:"12 Years",
        phone:"9876543210",
        status:"Available"
    },

    {
        image:"../images/doctor_2.jpg",
        name:"Dr.M.Priya Sharma",
        specialization:"Pediatrician",
        experience:"8 years",
        phone:"9876543211",
        status:"Not Available"
    },

    {
        image:"../images/doctor_3.jpg",
        name:"Dr.K.Rajesh Kumar",
        specialization:"Orthopedic Surgeon",
        experience:"15 years",
        phone:"9876543212",
        status:"Available"
    },

    {
        image:"../images/doctor_5.jpg",
        name:"Dr.S.Divya Nair",
        specialization:"Neurologist",
        experience:"10 years",
        phone:"9876543213",
        status:"Available"
    },

    {
        image:"../images/doctor_4.jpg",
        name:"Dr.M.Vikram Singh",
        specialization:"Cardiologist",
        experience:"9 years",
        phone:"9876543214",
        status:"Not Available"
    },

    {
        image:"../images/doctor_6.jpg",
        name:"Dr.R.Sri",
        specialization:"Dermatologist",
        experience:"7 Years",
        phone:"9876543215",
        status:"Available"
    }
    
];

// div container in html this
const container=document.getElementById("doctor-container");

// function
// doctors details module
function displayDoctors(data){
    container.innerHTML="";
    data.forEach(function(doctor){
        container.innerHTML+=`
        <div class="card">
            <img src="${doctor.image}">
            <h2>${doctor.name}</h2>
            <p><b>Specialization:</b> ${doctor.specialization}</p>
            <p><b>Experience:</b> ${doctor.experience}</p>
            <p><b>Phone:</b> ${doctor.phone}</p>
            <p><b>Status:</b> ${doctor.status} </p>
            <button>View Profile</button>
        </div>
        `;
    }
);
}

displayDoctors(doctors);

// search module
const search=document.getElementById("search");
search.addEventListener("input",function(){
    let value=search.value.toLowerCase();
    let result=doctors.filter(function(doctor){
        return doctor.name.toLowerCase().includes(value) || doctor.specialization.toLowerCase().includes(value);
    });

    displayDoctors(result);
});

