import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { String as String1 } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { ID, UID } from "../../../sui-chain/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { Bar as Bar1 } from "./Bar.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithSpecialTypesInVectors(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithSpecialTypesInVectors` + "<");
}

export interface WithSpecialTypesInVectorsFields<T0 extends TypeArgument> {
  id: ToField<UID>;
  string: ToField<Vector<String>>;
  asciiString: ToField<Vector<String1>>;
  idField: ToField<Vector<ID>>;
  bar: ToField<Vector<Bar1>>;
  option: ToField<Vector<Option<"u64">>>;
  optionGeneric: ToField<Vector<Option<T0>>>;
}

export type WithSpecialTypesInVectorsReified<T0 extends TypeArgument> = Reified<
  WithSpecialTypesInVectors<T0>,
  WithSpecialTypesInVectorsFields<T0>
>;

/**
 * Move struct: `WithSpecialTypesInVectors`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 */
export class WithSpecialTypesInVectors<T0 extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithSpecialTypesInVectors`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = WithSpecialTypesInVectors.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithSpecialTypesInVectors<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = WithSpecialTypesInVectors.$isPhantom;

  readonly id: ToField<UID>;
  readonly string: ToField<Vector<String>>;
  readonly asciiString: ToField<Vector<String1>>;
  readonly idField: ToField<Vector<ID>>;
  readonly bar: ToField<Vector<Bar1>>;
  readonly option: ToField<Vector<Option<"u64">>>;
  readonly optionGeneric: ToField<Vector<Option<T0>>>;

  private constructor(
    typeArgs: [ToTypeStr<T0>],
    fields: WithSpecialTypesInVectorsFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithSpecialTypesInVectors.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithSpecialTypesInVectors<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.string = fields.string;
    this.asciiString = fields.asciiString;
    this.idField = fields.idField;
    this.bar = fields.bar;
    this.option = fields.option;
    this.optionGeneric = fields.optionGeneric;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): WithSpecialTypesInVectorsReified<ToTypeArgument<T0>> {
    return {
      typeName: WithSpecialTypesInVectors.$typeName,
      fullTypeName: composeSuiType(
        WithSpecialTypesInVectors.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::fixture::WithSpecialTypesInVectors<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: WithSpecialTypesInVectors.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        WithSpecialTypesInVectors.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithSpecialTypesInVectors.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) =>
        WithSpecialTypesInVectors.fromBcs(T0, data),
      bcs: WithSpecialTypesInVectors.bcs(toBcs(T0)),
      fromJSONField: (field: any) =>
        WithSpecialTypesInVectors.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        WithSpecialTypesInVectors.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithSpecialTypesInVectors.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithSpecialTypesInVectors.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        WithSpecialTypesInVectors.fetch(client, T0, id),
      new: (fields: WithSpecialTypesInVectorsFields<ToTypeArgument<T0>>) => {
        return new WithSpecialTypesInVectors([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithSpecialTypesInVectors.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<WithSpecialTypesInVectors<ToTypeArgument<T0>>>> {
    return phantom(WithSpecialTypesInVectors.reified(T0));
  }
  static get p() {
    return WithSpecialTypesInVectors.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`WithSpecialTypesInVectors<${T0.name}>`, {
        id: UID.bcs,
        string: bcs.vector(String.bcs),
        ascii_string: bcs.vector(String1.bcs),
        id_field: bcs.vector(ID.bcs),
        bar: bcs.vector(Bar1.bcs),
        option: bcs.vector(Option.bcs(bcs.u64())),
        option_generic: bcs.vector(Option.bcs(T0)),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    return WithSpecialTypesInVectors.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      string: decodeFromFields(reified.vector(String.reified()), fields.string),
      asciiString: decodeFromFields(
        reified.vector(String1.reified()),
        fields.ascii_string,
      ),
      idField: decodeFromFields(reified.vector(ID.reified()), fields.id_field),
      bar: decodeFromFields(reified.vector(Bar1.reified()), fields.bar),
      option: decodeFromFields(
        reified.vector(Option.reified("u64")),
        fields.option,
      ),
      optionGeneric: decodeFromFields(
        reified.vector(Option.reified(typeArg)),
        fields.option_generic,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    if (!isWithSpecialTypesInVectors(item.type)) {
      throw new Error("not a WithSpecialTypesInVectors type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WithSpecialTypesInVectors.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      string: decodeFromFieldsWithTypes(
        reified.vector(String.reified()),
        item.fields.string,
      ),
      asciiString: decodeFromFieldsWithTypes(
        reified.vector(String1.reified()),
        item.fields.ascii_string,
      ),
      idField: decodeFromFieldsWithTypes(
        reified.vector(ID.reified()),
        item.fields.id_field,
      ),
      bar: decodeFromFieldsWithTypes(
        reified.vector(Bar1.reified()),
        item.fields.bar,
      ),
      option: decodeFromFieldsWithTypes(
        reified.vector(Option.reified("u64")),
        item.fields.option,
      ),
      optionGeneric: decodeFromFieldsWithTypes(
        reified.vector(Option.reified(typeArg)),
        item.fields.option_generic,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    return WithSpecialTypesInVectors.fromFields(
      typeArg,
      WithSpecialTypesInVectors.bcs(toBcs(typeArg)).parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      string: fieldToJSON<Vector<String>>(
        `vector<${String.$typeName}>`,
        this.string,
      ),
      asciiString: fieldToJSON<Vector<String1>>(
        `vector<${String1.$typeName}>`,
        this.asciiString,
      ),
      idField: fieldToJSON<Vector<ID>>(`vector<${ID.$typeName}>`, this.idField),
      bar: fieldToJSON<Vector<Bar1>>(`vector<${Bar1.$typeName}>`, this.bar),
      option: fieldToJSON<Vector<Option<"u64">>>(
        `vector<${Option.$typeName}<u64>>`,
        this.option,
      ),
      optionGeneric: fieldToJSON<Vector<Option<T0>>>(
        `vector<${Option.$typeName}<${this.$typeArgs[0]}>>`,
        this.optionGeneric,
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

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    return WithSpecialTypesInVectors.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      string: decodeFromJSONField(
        reified.vector(String.reified()),
        field.string,
      ),
      asciiString: decodeFromJSONField(
        reified.vector(String1.reified()),
        field.asciiString,
      ),
      idField: decodeFromJSONField(reified.vector(ID.reified()), field.idField),
      bar: decodeFromJSONField(reified.vector(Bar1.reified()), field.bar),
      option: decodeFromJSONField(
        reified.vector(Option.reified("u64")),
        field.option,
      ),
      optionGeneric: decodeFromJSONField(
        reified.vector(Option.reified(typeArg)),
        field.optionGeneric,
      ),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    if (json.$typeName !== WithSpecialTypesInVectors.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WithSpecialTypesInVectors.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WithSpecialTypesInVectors.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithSpecialTypesInVectors(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithSpecialTypesInVectors object`,
      );
    }
    return WithSpecialTypesInVectors.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): WithSpecialTypesInVectors<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWithSpecialTypesInVectors(data.bcs.type)
      ) {
        throw new Error(`object at is not a WithSpecialTypesInVectors object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return WithSpecialTypesInVectors.fromBcs(
        typeArg,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return WithSpecialTypesInVectors.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<WithSpecialTypesInVectors<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithSpecialTypesInVectors object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithSpecialTypesInVectors(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a WithSpecialTypesInVectors object`,
      );
    }

    return WithSpecialTypesInVectors.fromSuiObjectData(typeArg, res.data);
  }
}
