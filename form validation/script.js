// $(document).ready(function () {
//     const empList = [];

//     $("#submit").click(() => {
//         const email = $("#email").val();
//         const pass = $("#pass").val();
//         const age = $("#age").val();
//         const bloodGroup = $("#bloodGroup").val();

//         if (email && pass && age && bloodGroup) {
//             const emp = { email, pass, age, bloodGroup };

//             if (empList.some((element) => element.email === emp.email)) {
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops...",
//                     text: `${emp.email} is already exist!`,
//                     footer: '<a href="#">do not add duplicate email</a>',
//                 });
//             } else {
//                 if (parseInt(age) < 18) {
//                     Swal.fire({
//                         title: "Invalid Age",
//                         text: "Age must be 18 and above",
//                         icon: "error",
//                     });
//                     return;
//                 }

//                 if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
//                     Swal.fire({
//                         title: "Invalid Password",
//                         text: "Password must contain at least one special character",
//                         icon: "error",
//                     });
//                     return;
//                 }

//                 empList.push(emp);
//                 Swal.fire({
//                     title: "Good Job!",
//                     text: "Employee details added successfully",
//                     icon: "success",
//                 });
//                 $("#email, #pass, #age, #bloodGroup").val("");
//             }

//             renderTable();
//         } else {
//             Swal.fire({
//                 title: "Cannot be empty",
//                 text: "Fill all the input fields",
//                 icon: "warning",
//             });
//         }
//     });

//     $('body').on('click', '.delete', function () {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "Do you want to delete this user",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#dd3",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 const id = $(this).attr('id');
//                 empList = empList.filter(a => a.email !== id);
//                 console.log(empList);
//                 renderTable();

//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "User has been deleted.",
//                     icon: "success",
//                 });
//             }
//         });
//     });
//     function renderTable() {
//         const empData = $(".empData");
//         if (empList.length !== 0) {
//             let table = `<table class="table table-secondary table-hover">
//                 <thead>
//                     <tr>
//                         <th scope="col">Email</th>
//                         <th scope="col">Password</th>
//                         <th scope="col">Age</th>
//                         <th scope="col">Blood Group</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>`;

//             empList.forEach(e => {
//                 table += `<tr>
//                     <td>${e.email}</td>
//                     <td>${e.pass}</td>
//                     <td>${e.age}</td>
//                     <td>${e.bloodGroup}</td>
//                     <td><div class="fa fa-trash-o delete" id="${e.email}"></div></td>
//                     </tr>`;
//             });

//             table += `</tbody></table>`;
//             empData.html(table);
//         } else {
//             empData.html("");
//         }
//     }
// });





$(document).ready(function () {
    const empList = [];

    $("#submit").click(() => {
        const email = $("#email").val();
        const pass = $("#pass").val();
        const age = $("#age").val();
        const bloodGroup = $("#bloodGroup").val();

        if (email && pass && age && bloodGroup) {
            const emp = { email, pass, age, bloodGroup };

            if (empList.some((element) => element.email === emp.email)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${emp.email} is already exist!`,
                    footer: '<a href="#">do not add duplicate email</a>',
                });
            } else {
                if (parseInt(age) < 18) {
                    Swal.fire({
                        title: "Invalid Age",
                        text: "Age must be 18 and above",
                        icon: "error",
                    });
                    return;
                }

                if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
                    Swal.fire({
                        title: "Invalid Password",
                        text: "Password must contain at least one special character",
                        icon: "error",
                    });
                    return;
                }
                empList.push(emp);
                Swal.fire({
                    title: "Good Job!",
                    text: "Employee details added successfully",
                    icon: "success",
                });
                $("#email, #pass, #age, #bloodGroup").val("");
            }

            renderTable();
        } else {
            Swal.fire({
                title: "Cannot be empty",
                text: "Fill all the input fields",
                icon: "warning",
            });
        }
    });

    $('body').on('click', '.delete', function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#dd3",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const id = $(this).attr('id');
                empList = empList.filter(a => a.email !== id);
                console.log(empList);
                renderTable();

                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success",
                });
            }
        });
    });

    function renderTable() {
        const empData = $(".empData");
        if (empList.length !== 0) {
            let table = `<table class="table table-secondary table-hover">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Age</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>`;

            empList.forEach(e => {
                table += `<tr>
                    <td>${e.email}</td>
                    <td>${e.pass}</td>
                    <td>${e.age}</td>
                    <td>${e.bloodGroup}</td>
                    <td><i class="fas fa-trash delete" id="${e.email}"></i></td>
                    </tr>`;
            });

            table += `</tbody></table>`;
            empData.html(table);
        } else {
           
            empData.html("");
        }
    }
});
