import socket
import asyncio


targets = input("[+] Enter the IP addresses you want to scan (separated by ','): ")
ports = int(input("[+] Enter how many ports you want to scan: "))


async def splitter():
    if ',' in targets:
        target = targets.split(", ")
        for word in target:
            await scan(word, ports)
    else:
        await scan(targets, ports)


async def scan(word, ports):
    for port in range(1, ports):
        await scan_port(word, port)


async def scan_port(word, port):
    sock = socket.socket()
    try:
        sock.connect((word, port))
        print("[*] Port opened: " + str(port))
    except:
        pass
    finally:
        sock.close()




asyncio.run(splitter())