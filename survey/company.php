<?php
// Conexão com o banco de dados (substitua os dados conforme necessário)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resetting_survey_dev";

// Criar conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

session_start();

// Preparar a instrução SQL para inserção de dados na tabela Company
$sql = "SELECT * FROM Company WHERE CompanyID=" . $_GET['id'];
// (company_name, company_description, reference_year, tourism_products, total_employees, 
// female_employees_percentage, male_employees_percentage, avg_salary_female, avg_salary_male, 
// highest_salary_female, highest_salary_male, duties_highest_female, duties_highest_male, 
// lowest_salary_female, lowest_salary_male, duties_lowest_female, duties_lowest_male, 
// foreign_employees_percentage, national_employees_percentage, avg_salary_foreign, avg_salary_national, 
// highest_salary_foreign, highest_salary_national, duties_highest_foreign, duties_highest_national, 
// lowest_salary_foreign, lowest_salary_national, average_weekly_hours, average_weekly_hours_female, 
// average_weekly_hours_male, average_weekly_hours_foreign, average_weekly_hours_national, 
// health_care_system, employees_covered_health_care, health_care_coverage_details, health_care_provider, 
// no_formal_education_percentage, primary_education_percentage, secondary_education_percentage, 
// vocational_training_percentage, bachelors_degree_percentage, masters_degree_percentage, 
// doctorate_degree_percentage, post_doctorate, social_security, employees_covered_social_security,
// environmental_management_system, certification_from_standard_body, upload_data, 
// environmental_aspects_suppliers, environmental_criteria_required, weight_environmental_component,
// fossil_fuels, fossil_fuel_amount, external_supply_meters, internal_supply_meters, 
// electricity_generation, other_energy_generation, heat_usage, heat_usage_description,
// air_trip_count, rail_trip_count, road_trip_count, water_sources, paper_weight, 
// plastics_weight, glass_weight, ink_cartridges_weight, electric_waste_weight, battery_weight,
// lubricant_oils_weight, food_oils_weight, lamps_weight, contaminated_packaging_weight,
// pressurized_containers_weight, construction_waste_weight, furniture_weight,
// agriculture_biowaste_weight, organic_waste_weight, coffee_capsules_weight, corks_weight,
// other_waste_weight)";

// Executar a consulta
$result = $conn->query($sql);

$companies = [];

// Verificar se há resultados
if ($result->num_rows > 0) {
    // Loop através dos resultados e armazenar no array
    while ($row = $result->fetch_assoc()) {
        $companies[] = [
            'CompanyID' => $row['CompanyID'],
            'CompanyName' => $row['CompanyName'],
            'CompanyDescription' => $row['CompanyDescription'],
            'ReferenceYear' => $row['ReferenceYear']
        ];
    }
}

// Fechar conexão com o banco de dados
$conn->close();

// Retornar os resultados como JSON
header('Content-Type: application/json');
echo json_encode($companies);
?>

