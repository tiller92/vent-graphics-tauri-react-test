// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn pressure_current()->  isize{
    10
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![pressure_current])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
