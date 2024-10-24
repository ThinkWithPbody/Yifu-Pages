---
title: Plex Media Server
tags:
  - project
status: DONE
priority: medium
start: 2024-07-10
due: 
completion: 2024-07-10
share: true
---
## Moving Plex Media Server to Pi4

[Move an Install to Another System](https://support.plex.tv/articles/201370363-move-an-install-to-another-system/)

1. `sudo apt update`
2. `sudo apt upgrade`
3. `curl https://downloads.plex.tv/plex-keys/PlexSign.key | gpg --dearmor | sudo tee /usr/share/keyrings/plex-archive-keyring.gpg >/dev/null`
4. `echo deb [signed-by=/usr/share/keyrings/plex-archive-keyring.gpg] https://downloads.plex.tv/repo/deb public main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list`
5. `sudo apt update`
6. `sudo apt install plexmediaserver`
7. `sudo service plexmediaserver stop`
8. Stop original server and move all files to hard drive
9. `mkdir /mnt/usb`
10. `sudo nano /etc/fstab`
11. `UUID= /mnt/usb ext4 defaults 0 0`
12. `sudo rm -r "/var/lib/plexmediaserver/Library/Application Support/Plex Media Server"`
13. `sudo ln -s "/mnt/usb/<path_to_custom_library>/Plex Media Server" "/var/lib/plexmediaserver/Library/Application Support/"`
14. `ls -l "/var/lib/plexmediaserver/Library/Application Support"`
15. `sudo reboot`
16. `sudo service plexmediaserver start`
17. [Command Line Loudness Analysis](https://www.reddit.com/r/PleX/comments/yytqdy/forcing_loudness_analysis/), [via cron](https://forums.plex.tv/t/make-media-analysis-stop-wasting-cpu-on-duplicate-repeated-analysis/853275)


