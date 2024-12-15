"""Exports one STL file per object selected, export folder is same as current
folder if file has been saved; otherwise, choice of file name/location
Script by Mitch Heynick 03.04.15 Edited by Yifu Ding 2024-03-24"""

import rhinoscriptsyntax as rs
import os
import os.path

def GetSTLSettings():
    e_str = "_ExportFileAs=_Binary "
    e_str+= "_ExportUnfinishedObjects=_Yes "
    e_str+= "_UseSimpleDialog=_No "
    e_str+= "_Enter"
    return e_str
    
def BatchExportSTLByObject():
    msg="Select objects to export as individual .stl files"
    objs = rs.GetObjects(msg, 8 + 16 + 32,preselect=True)
    if not objs : return
    
    filename = rs.DocumentName()
    filt = "STL Files (*.stl)|*.stl||"
    if not filename:
        #document hasn't been saved
        filename=rs.SaveFileName("Main file name for STL export?", filt)
        if filename==None: return
    else:
        #document has been saved, get path
        filename=rs.DocumentPath()
        filename+=rs.DocumentName()[:-4]
        filename+="_BatchExport\\"
        if not os.path.exists(filename):
            os.mkdir(filename)
    
    stl_sett = GetSTLSettings()
    rs.EnableRedraw(False)
    for i, obj in enumerate(objs):
        e_file_name = "{}BE-{}.stl".format(filename, str(i+1))	
        rs.UnselectAllObjects()
        rs.SelectObject(obj)
        #runs the export using the file name/path and settings
        rs.Command('-_Export "{}" {}'.format(e_file_name,stl_sett), False)
    rs.EnableRedraw(True)
    print "Batch Export Finished @ " + filename

BatchExportSTLByObject()