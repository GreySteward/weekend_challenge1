$(document).ready(function() {
	var empArray = [];
	var empMonthlySalary = 0;
	var totalMonthlySalary = 0;

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		empMonthlySalary = parseInt(values.empSalary).toFixed(2)/12;
		totalMonthlySalary += empMonthlySalary;

		empArray.push(values);
		console.log(empArray);

		$('#employeeForm').find('input[type=text], input[type=number]').val('');
		
		appendDom(values);
	});

	$('#button').on('click', function(event) {
		$('#container').find('.emp').remove();
		console.log('clear');
	});

	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p class = "emp">EmployeeFirstName: ' + empInfo.empFirstName + '</p>');
		$el.append('<p class = "emp">EmployeeLastName: ' + empInfo.empLastName + '</p>');
		$el.append('<p class = "emp">Employee ID: ' + empInfo.empId + '</p>');
		$el.append('<p class = "emp">Employee Job Title: ' + empInfo.empJobTitle + '</p>');
		$el.append('<p class = "emp">Employee Salary: ' + empInfo.empSalary + '</p>');
		$el.append('<p class = "emp">Emp Monthly Salary: ' + empMonthlySalary + '</p>');
		$el.append('<p>Total Monthly Salary: ' + totalMonthlySalary + '</p>');
	}
});

