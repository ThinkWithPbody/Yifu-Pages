#! python3
import rhinoscriptsyntax as rs

def convert_curves_to_planar_surfaces():
    # Prompt user to select closed curves
    curves = rs.GetObjects("Select closed curves to convert to planar surfaces", rs.filter.curve)
    if not curves:
        return
    
    # Filter out curves that are not closed
    closed_curves = [curve for curve in curves if rs.IsCurveClosed(curve)]
    
    if not closed_curves:
        print("No closed curves selected.")
        return
    
    # Create planar surfaces from closed curves
    for curve in closed_curves:
        # Use PlanarSrf to create a surface from the closed curve
        planar_surface = rs.AddPlanarSrf(curve)
        if planar_surface:
            print(f"Created planar surface from curve: {curve}")
        else:
            print(f"Failed to create planar surface from curve: {curve}")

if __name__ == "__main__":
    convert_curves_to_planar_surfaces()
