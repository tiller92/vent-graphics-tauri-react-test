// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tauri::command]
fn pressure_time(invoke_message: String)-> String {
    invoke_message.into()    
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![pressure_time])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
