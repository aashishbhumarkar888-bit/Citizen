const fs = require('fs');
const path = require('path');
const b = 'e:/New folder (2)/NEW/src';
let admin = fs.readFileSync(path.join(b, 'app/admin/page.tsx'), 'utf8');
admin = admin.replace("Search, AlertCircle, CheckCircle2, Clock, MapPin, Camera, UserCircle", "Search, AlertCircle, CheckCircle2, MapPin, Camera, UserCircle");
fs.writeFileSync(path.join(b, 'app/admin/page.tsx'), admin, 'utf8');
