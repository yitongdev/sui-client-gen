import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { String } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String as String1 } from "../../../move-stdlib-chain/string/structs/index.js";
import { ID, UID } from "../../../sui-chain/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { ExampleStruct as ExampleStruct1 } from "./ExampleStruct.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isSpecialTypesStruct(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::examples::SpecialTypesStruct`;
}

export interface SpecialTypesStructFields {
  id: ToField<UID>;
  asciiString: ToField<String>;
  utf8String: ToField<String1>;
  vectorOfU64: ToField<Vector<"u64">>;
  vectorOfObjects: ToField<Vector<ExampleStruct1>>;
  idField: ToField<ID>;
  address: ToField<"address">;
  optionSome: ToField<Option<"u64">>;
  optionNone: ToField<Option<"u64">>;
}

export type SpecialTypesStructReified = Reified<
  SpecialTypesStruct,
  SpecialTypesStructFields
>;

/**
 * Move struct: `SpecialTypesStruct`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::examples`
 */
export class SpecialTypesStruct implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::examples::SpecialTypesStruct`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SpecialTypesStruct.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::examples::SpecialTypesStruct`;
  readonly $typeArgs: [];
  readonly $isPhantom = SpecialTypesStruct.$isPhantom;

  readonly id: ToField<UID>;
  readonly asciiString: ToField<String>;
  readonly utf8String: ToField<String1>;
  readonly vectorOfU64: ToField<Vector<"u64">>;
  readonly vectorOfObjects: ToField<Vector<ExampleStruct1>>;
  readonly idField: ToField<ID>;
  readonly address: ToField<"address">;
  readonly optionSome: ToField<Option<"u64">>;
  readonly optionNone: ToField<Option<"u64">>;

  private constructor(typeArgs: [], fields: SpecialTypesStructFields) {
    this.$fullTypeName = composeSuiType(
      SpecialTypesStruct.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::examples::SpecialTypesStruct`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.asciiString = fields.asciiString;
    this.utf8String = fields.utf8String;
    this.vectorOfU64 = fields.vectorOfU64;
    this.vectorOfObjects = fields.vectorOfObjects;
    this.idField = fields.idField;
    this.address = fields.address;
    this.optionSome = fields.optionSome;
    this.optionNone = fields.optionNone;
  }

  static reified(): SpecialTypesStructReified {
    return {
      typeName: SpecialTypesStruct.$typeName,
      fullTypeName: composeSuiType(
        SpecialTypesStruct.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::examples::SpecialTypesStruct`,
      typeArgs: [] as [],
      isPhantom: SpecialTypesStruct.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        SpecialTypesStruct.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SpecialTypesStruct.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SpecialTypesStruct.fromBcs(data),
      bcs: SpecialTypesStruct.bcs,
      fromJSONField: (field: any) => SpecialTypesStruct.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        SpecialTypesStruct.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SpecialTypesStruct.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SpecialTypesStruct.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        SpecialTypesStruct.fetch(client, id),
      new: (fields: SpecialTypesStructFields) => {
        return new SpecialTypesStruct([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SpecialTypesStruct.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SpecialTypesStruct>> {
    return phantom(SpecialTypesStruct.reified());
  }
  static get p() {
    return SpecialTypesStruct.phantom();
  }

  static get bcs() {
    return bcs.struct("SpecialTypesStruct", {
      id: UID.bcs,
      ascii_string: String.bcs,
      utf8_string: String1.bcs,
      vector_of_u64: bcs.vector(bcs.u64()),
      vector_of_objects: bcs.vector(ExampleStruct1.bcs),
      id_field: ID.bcs,
      address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      option_some: Option.bcs(bcs.u64()),
      option_none: Option.bcs(bcs.u64()),
    });
  }

  static fromFields(fields: Record<string, any>): SpecialTypesStruct {
    return SpecialTypesStruct.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      asciiString: decodeFromFields(String.reified(), fields.ascii_string),
      utf8String: decodeFromFields(String1.reified(), fields.utf8_string),
      vectorOfU64: decodeFromFields(
        reified.vector("u64"),
        fields.vector_of_u64,
      ),
      vectorOfObjects: decodeFromFields(
        reified.vector(ExampleStruct1.reified()),
        fields.vector_of_objects,
      ),
      idField: decodeFromFields(ID.reified(), fields.id_field),
      address: decodeFromFields("address", fields.address),
      optionSome: decodeFromFields(Option.reified("u64"), fields.option_some),
      optionNone: decodeFromFields(Option.reified("u64"), fields.option_none),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SpecialTypesStruct {
    if (!isSpecialTypesStruct(item.type)) {
      throw new Error("not a SpecialTypesStruct type");
    }

    return SpecialTypesStruct.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      asciiString: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.ascii_string,
      ),
      utf8String: decodeFromFieldsWithTypes(
        String1.reified(),
        item.fields.utf8_string,
      ),
      vectorOfU64: decodeFromFieldsWithTypes(
        reified.vector("u64"),
        item.fields.vector_of_u64,
      ),
      vectorOfObjects: decodeFromFieldsWithTypes(
        reified.vector(ExampleStruct1.reified()),
        item.fields.vector_of_objects,
      ),
      idField: decodeFromFieldsWithTypes(ID.reified(), item.fields.id_field),
      address: decodeFromFieldsWithTypes("address", item.fields.address),
      optionSome: decodeFromFieldsWithTypes(
        Option.reified("u64"),
        item.fields.option_some,
      ),
      optionNone: decodeFromFieldsWithTypes(
        Option.reified("u64"),
        item.fields.option_none,
      ),
    });
  }

  static fromBcs(data: Uint8Array): SpecialTypesStruct {
    return SpecialTypesStruct.fromFields(SpecialTypesStruct.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      asciiString: this.asciiString,
      utf8String: this.utf8String,
      vectorOfU64: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.vectorOfU64),
      vectorOfObjects: fieldToJSON<Vector<ExampleStruct1>>(
        `vector<${ExampleStruct1.$typeName}>`,
        this.vectorOfObjects,
      ),
      idField: this.idField,
      address: this.address,
      optionSome: fieldToJSON<Option<"u64">>(
        `${Option.$typeName}<u64>`,
        this.optionSome,
      ),
      optionNone: fieldToJSON<Option<"u64">>(
        `${Option.$typeName}<u64>`,
        this.optionNone,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): SpecialTypesStruct {
    return SpecialTypesStruct.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      asciiString: decodeFromJSONField(String.reified(), field.asciiString),
      utf8String: decodeFromJSONField(String1.reified(), field.utf8String),
      vectorOfU64: decodeFromJSONField(
        reified.vector("u64"),
        field.vectorOfU64,
      ),
      vectorOfObjects: decodeFromJSONField(
        reified.vector(ExampleStruct1.reified()),
        field.vectorOfObjects,
      ),
      idField: decodeFromJSONField(ID.reified(), field.idField),
      address: decodeFromJSONField("address", field.address),
      optionSome: decodeFromJSONField(Option.reified("u64"), field.optionSome),
      optionNone: decodeFromJSONField(Option.reified("u64"), field.optionNone),
    });
  }

  static fromJSON(json: Record<string, any>): SpecialTypesStruct {
    if (json.$typeName !== SpecialTypesStruct.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SpecialTypesStruct.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SpecialTypesStruct {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSpecialTypesStruct(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SpecialTypesStruct object`,
      );
    }
    return SpecialTypesStruct.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SpecialTypesStruct {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isSpecialTypesStruct(data.bcs.type)
      ) {
        throw new Error(`object at is not a SpecialTypesStruct object`);
      }

      return SpecialTypesStruct.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SpecialTypesStruct.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<SpecialTypesStruct> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SpecialTypesStruct object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSpecialTypesStruct(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a SpecialTypesStruct object`);
    }

    return SpecialTypesStruct.fromSuiObjectData(res.data);
  }
}
