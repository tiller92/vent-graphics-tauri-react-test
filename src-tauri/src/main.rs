// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[derive(Debug)]
struct Patient {
    height: usize,
    weight: usize,
    lung_compliance:String,
    airway_resistance: isize,
    blood_gas: Vec<f32>,
}

#[derive(Debug)]
struct Volume_AC{
       tidal_volume: usize,
       frequency:usize,
       inspiratory_time:f32,
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![peak_pressure_current])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn peak_pressure_current()->  isize{
     
    10
}

fn create_patient() -> Patient {
    let patient= Patient{
        height: 70,    
        weight: 80,
        lung_compliance: "good".to_string(),
        airway_resistance: 5,
        blood_gas: vec![7.40,100.0,20.0],
        };
    patient
}

fn create_volume_ac() -> Volume_AC {
    let vent_settings = Volume_AC{
        tidal_volume: 500,
        frequency: 12,
        inspiratory_time: 1.0,
    };
    vent_settings
} 