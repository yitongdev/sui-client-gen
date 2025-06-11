import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { String } from "../../../0x1/ascii/structs/index.js";
import { PKG_V35 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPublisher(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::package::Publisher`;
}

export interface PublisherFields {
  id: ToField<UID>;
  package: ToField<String>;
  moduleName: ToField<String>;
}

export type PublisherReified = Reified<Publisher, PublisherFields>;

/**
 * Move struct: `Publisher`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 */
export class Publisher implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::package::Publisher`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Publisher.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::package::Publisher`;
  readonly $typeArgs: [];
  readonly $isPhantom = Publisher.$isPhantom;

  readonly id: ToField<UID>;
  readonly package: ToField<String>;
  readonly moduleName: ToField<String>;

  private constructor(typeArgs: [], fields: PublisherFields) {
    this.$fullTypeName = composeSuiType(
      Publisher.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::package::Publisher`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.package = fields.package;
    this.moduleName = fields.moduleName;
  }

  static reified(): PublisherReified {
    return {
      typeName: Publisher.$typeName,
      fullTypeName: composeSuiType(
        Publisher.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::package::Publisher`,
      typeArgs: [] as [],
      isPhantom: Publisher.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Publisher.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Publisher.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Publisher.fromBcs(data),
      bcs: Publisher.bcs,
      fromJSONField: (field: any) => Publisher.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Publisher.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Publisher.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Publisher.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Publisher.fetch(client, id),
      new: (fields: PublisherFields) => {
        return new Publisher([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Publisher.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Publisher>> {
    return phantom(Publisher.reified());
  }
  static get p() {
    return Publisher.phantom();
  }

  static get bcs() {
    return bcs.struct("Publisher", {
      id: UID.bcs,
      package: String.bcs,
      module_name: String.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Publisher {
    return Publisher.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      package: decodeFromFields(String.reified(), fields.package),
      moduleName: decodeFromFields(String.reified(), fields.module_name),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Publisher {
    if (!isPublisher(item.type)) {
      throw new Error("not a Publisher type");
    }

    return Publisher.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      package: decodeFromFieldsWithTypes(String.reified(), item.fields.package),
      moduleName: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.module_name,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Publisher {
    return Publisher.fromFields(Publisher.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      package: this.package,
      moduleName: this.moduleName,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Publisher {
    return Publisher.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      package: decodeFromJSONField(String.reified(), field.package),
      moduleName: decodeFromJSONField(String.reified(), field.moduleName),
    });
  }

  static fromJSON(json: Record<string, any>): Publisher {
    if (json.$typeName !== Publisher.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Publisher.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Publisher {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPublisher(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Publisher object`,
      );
    }
    return Publisher.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Publisher {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPublisher(data.bcs.type)) {
        throw new Error(`object at is not a Publisher object`);
      }

      return Publisher.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Publisher.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Publisher> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Publisher object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPublisher(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Publisher object`);
    }

    return Publisher.fromSuiObjectData(res.data);
  }
}
