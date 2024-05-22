#!/usr/bin/env bash

# Function to create API module
create_api_module() {
  local module_path=$1
  local module_name=$(basename "$module_path")
  
  # Transform 'cart-items' to 'CartItems'
  # Split the module name by hyphen, capitalize each part, and concatenate
  local capitalized_module_name=""
  local router_instance_name=""
  IFS='-' read -ra ADDR <<< "$module_name"
  for i in "${ADDR[@]}"; do
      part="$(tr '[:lower:]' '[:upper:]' <<< ${i:0:1})${i:1}"
      capitalized_module_name+="$part"
      router_instance_name+="${part^}"
  done

  # Lowercase the first character for the router instance
  router_instance_name="$(tr '[:upper:]' '[:lower:]' <<< ${router_instance_name:0:1})${router_instance_name:1}Router"


  # Create directory if it does not exist
  mkdir -p "$module_path"
  
  # Generate controller file
  cat <<EOF > "${module_path}/${module_name}.controller.ts"
    import { ${capitalized_module_name}Service } from './${module_name}.service';

    export class ${capitalized_module_name}Controller {
      private service: ${capitalized_module_name}Service;

      constructor(service = new ${capitalized_module_name}Service()) {
        this.service = service;
      }

      public getHello(): string {
        return this.service.getHello();
      }
    }
EOF

  # Generate service file
  cat <<EOF > "${module_path}/${module_name}.service.ts"
    export class ${capitalized_module_name}Service {
      public getHello(): string {
        return 'Hello from ${capitalized_module_name}Service!';
      }
    }
EOF

  # Generate router file
  cat <<EOF > "${module_path}/${module_name}.router.ts"
    import { Router } from 'express';
    import { ${capitalized_module_name}Controller } from './${module_name}.controller';

    const ${router_instance_name}: Router = Router();
    const controller = new ${capitalized_module_name}Controller();

    ${router_instance_name}.get('/', (req, res) => {
      res.send(controller.getHello());
    });

    export default ${router_instance_name};
EOF

  # Generate test files
  # Controller Test
  cat <<EOF > "${module_path}/${module_name}.controller.unit-test.ts"
    import { ${capitalized_module_name}Controller } from './${module_name}.controller';
    import { ${capitalized_module_name}Service } from './${module_name}.service';

    describe('${capitalized_module_name}Controller', () => {
      let controller: ${capitalized_module_name}Controller;
      let service: ${capitalized_module_name}Service;

      beforeEach(() => {
        service = new ${capitalized_module_name}Service();
        controller = new ${capitalized_module_name}Controller(service);
      });

      it('should return "Hello from ${capitalized_module_name}Service!"', () => {
        expect(controller.getHello()).toEqual('Hello from ${capitalized_module_name}Service!');
      });
    });
EOF

  # Service Test
  cat <<EOF > "${module_path}/${module_name}.service.unit-test.ts"
    import { ${capitalized_module_name}Service } from './${module_name}.service';

    describe('${capitalized_module_name}Service', () => {
      let service: ${capitalized_module_name}Service;

      beforeEach(() => {
        service = new ${capitalized_module_name}Service();
      });

      it('should return "Hello from ${capitalized_module_name}Service!"', () => {
        expect(service.getHello()).toEqual('Hello from ${capitalized_module_name}Service!');
      });
    });
EOF

  # Router Test
  cat <<EOF > "${module_path}/${module_name}.router.e2e-test.ts"
    import request from 'supertest';
    import ${router_instance_name} from './${module_name}.router';
    import app from '@/index';

    app.use('/${module_name}', ${router_instance_name});

    describe('${capitalized_module_name}Router', () => {
      it('GET / - should return "Hello from ${capitalized_module_name}Service!"', async () => {
        const res = await request(app).get('/${module_name}');
        expect(res.text).toEqual('Hello from ${capitalized_module_name}Service!');
      });
    });
EOF
}

# Check if argument is provided
if [ $# -eq 0 ]
then
  echo "Usage: $0 <module_path>"
  exit 1
fi

# Call function with module path
create_api_module "$1"
