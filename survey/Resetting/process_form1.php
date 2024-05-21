<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configurações de conexão com o banco de dados
    $hostname = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'resitting';

    try {
        // Estabelecer a conexão com o banco de dados usando PDO
        $pdo = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Preparar a instrução SQL para inserção de dados na tabela Company
        $sql = "INSERT INTO Company 
                (company_name, company_description, reference_year, tourism_products, total_employees, 
                female_employees_percentage, male_employees_percentage, avg_salary_female, avg_salary_male, 
                highest_salary_female, highest_salary_male, duties_highest_female, duties_highest_male, 
                lowest_salary_female, lowest_salary_male, duties_lowest_female, duties_lowest_male, 
                foreign_employees_percentage, national_employees_percentage, avg_salary_foreign, avg_salary_national, 
                highest_salary_foreign, highest_salary_national, duties_highest_foreign, duties_highest_national, 
                lowest_salary_foreign, lowest_salary_national, average_weekly_hours, average_weekly_hours_female, 
                average_weekly_hours_male, average_weekly_hours_foreign, average_weekly_hours_national, 
                health_care_system, employees_covered_health_care, health_care_coverage_details, health_care_provider, 
                no_formal_education_percentage, primary_education_percentage, secondary_education_percentage, 
                vocational_training_percentage, bachelors_degree_percentage, masters_degree_percentage, 
                doctorate_degree_percentage, post_doctorate, social_security, employees_covered_social_security,
                environmental_management_system, certification_from_standard_body, upload_data, 
                environmental_aspects_suppliers, environmental_criteria_required, weight_environmental_component,
                fossil_fuels, fossil_fuel_amount, external_supply_meters, internal_supply_meters, 
                electricity_generation, other_energy_generation, heat_usage, heat_usage_description,
                air_trip_count, rail_trip_count, road_trip_count, water_sources, paper_weight, 
                plastics_weight, glass_weight, ink_cartridges_weight, electric_waste_weight, battery_weight,
                lubricant_oils_weight, food_oils_weight, lamps_weight, contaminated_packaging_weight,
                pressurized_containers_weight, construction_waste_weight, furniture_weight,
                agriculture_biowaste_weight, organic_waste_weight, coffee_capsules_weight, corks_weight,
                other_waste_weight)
                VALUES 
                (:company_name, :company_description, :reference_year, :tourism_products, :total_employees, 
                :female_employees_percentage, :male_employees_percentage, :avg_salary_female, :avg_salary_male, 
                :highest_salary_female, :highest_salary_male, :duties_highest_female, :duties_highest_male, 
                :lowest_salary_female, :lowest_salary_male, :duties_lowest_female, :duties_lowest_male, 
                :foreign_employees_percentage, :national_employees_percentage, :avg_salary_foreign, :avg_salary_national, 
                :highest_salary_foreign, :highest_salary_national, :duties_highest_foreign, :duties_highest_national, 
                :lowest_salary_foreign, :lowest_salary_national, :average_weekly_hours, :average_weekly_hours_female, 
                :average_weekly_hours_male, :average_weekly_hours_foreign, :average_weekly_hours_national, 
                :health_care_system, :employees_covered_health_care, :health_care_coverage_details, :health_care_provider, 
                :no_formal_education_percentage, :primary_education_percentage, :secondary_education_percentage, 
                :vocational_training_percentage, :bachelors_degree_percentage, :masters_degree_percentage, 
                :doctorate_degree_percentage, :post_doctorate, :social_security, :employees_covered_social_security,
                :environmental_management_system, :certification_from_standard_body, :upload_data, 
                :environmental_aspects_suppliers, :environmental_criteria_required, :weight_environmental_component,
                :fossil_fuels, :fossil_fuel_amount, :external_supply_meters, :internal_supply_meters, 
                :electricity_generation, :other_energy_generation, :heat_usage, :heat_usage_description,
                :air_trip_count, :rail_trip_count, :road_trip_count, :water_sources, :paper_weight, 
                :plastics_weight, :glass_weight, :ink_cartridges_weight, :electric_waste_weight, :battery_weight,
                :lubricant_oils_weight, :food_oils_weight, :lamps_weight, :contaminated_packaging_weight,
                :pressurized_containers_weight, :construction_waste_weight, :furniture_weight,
                :agriculture_biowaste_weight, :organic_waste_weight, :coffee_capsules_weight, :corks_weight,
                :other_waste_weight)";

        // Preparar os dados para inserção
        $stmt = $pdo->prepare($sql);

        // Bind dos parâmetros com os valores do formulário
        $stmt->bindParam(':company_name', $_POST['company_name']);
        $stmt->bindParam(':company_description', $_POST['company_description']);
        $stmt->bindParam(':reference_year', $_POST['reference_year']);
        $stmt->bindParam(':tourism_products', $_POST['tourism_products']);
        $stmt->bindParam(':total_employees', $_POST['total_employees']);
        //fazer a continuação domingo
        $stmt->bindParam(':lubricant_oils_weight', $_POST['lubricant_oils_weight']);
        $stmt->bindParam(':food_oils_weight', $_POST['food_oils_weight']);
        $stmt->bindParam(':lamps_weight', $_POST['lamps_weight']);
        $stmt->bindParam(':contaminated_packaging_weight', $_POST['contaminated_packaging_weight']);
        $stmt->bindParam(':pressurized_containers_weight', $_POST['pressurized_containers_weight']);
        $stmt->bindParam(':construction_waste_weight', $_POST['construction_waste_weight']);
        $stmt->bindParam(':furniture_weight', $_POST['furniture_weight']);
        $stmt->bindParam(':agriculture_biowaste_weight', $_POST['agriculture_biowaste_weight']);
        $stmt->bindParam(':organic_waste_weight', $_POST['organic_waste_weight']);
        $stmt->bindParam(':coffee_capsules_weight', $_POST['coffee_capsules_weight']);
        $stmt->bindParam(':corks_weight', $_POST['corks_weight']);
        $stmt->bindParam(':other_waste_weight', $_POST['other_waste_weight']);

        // Executar a instrução SQL
        $stmt->execute();

        echo "Dados inseridos com sucesso!";
    } catch(PDOException $e) {
        echo "Erro ao inserir dados no banco de dados: " . $e->getMessage();
    }

    // Fechar conexão com o banco de dados
    $pdo = null;
}
?>
