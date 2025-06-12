import * as reified from "../../../_framework/reified.js";
import { String as String1 } from "../../../_dependencies/source/0x1/ascii/structs/index.js";
import { Option } from "../../../_dependencies/source/0x1/option/structs/index.js";
import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
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
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Balance } from "../../../sui/balance/structs/index.js";
import { ID, UID } from "../../../sui/object/structs/index.js";
import { SUI } from "../../../sui/sui/structs/index.js";
import { Url } from "../../../sui/url/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { Bar as Bar1 } from "./Bar.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithSpecialTypes(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithSpecialTypes` + "<");
}

export interface WithSpecialTypesFields<T extends PhantomTypeArgument, U extends TypeArgument> {
  id: ToField<UID>;
  string: ToField<String>;
  asciiString: ToField<String1>;
  url: ToField<Url>;
  idField: ToField<ID>;
  uid: ToField<UID>;
  balance: ToField<Balance<ToPhantom<SUI>>>;
  option: ToField<Option<"u64">>;
  optionObj: ToField<Option<Bar1>>;
  optionNone: ToField<Option<"u64">>;
  balanceGeneric: ToField<Balance<T>>;
  optionGeneric: ToField<Option<U>>;
  optionGenericNone: ToField<Option<U>>;
}

export type WithSpecialTypesReified<
  T extends PhantomTypeArgument,
  U extends TypeArgument,
> = Reified<WithSpecialTypes<T, U>, WithSpecialTypesFields<T, U>>;

/**
 * Move struct: `WithSpecialTypes`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0 (phantom)
 * @typeParam U - Type parameter 1
 */
export class WithSpecialTypes<T extends PhantomTypeArgument, U extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithSpecialTypes`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, false] as const;

  readonly $typeName = WithSpecialTypes.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithSpecialTypes<${PhantomToTypeStr<T>}, ${ToTypeStr<U>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, ToTypeStr<U>];
  readonly $isPhantom = WithSpecialTypes.$isPhantom;

  readonly id: ToField<UID>;
  readonly string: ToField<String>;
  readonly asciiString: ToField<String1>;
  readonly url: ToField<Url>;
  readonly idField: ToField<ID>;
  readonly uid: ToField<UID>;
  readonly balance: ToField<Balance<ToPhantom<SUI>>>;
  readonly option: ToField<Option<"u64">>;
  readonly optionObj: ToField<Option<Bar1>>;
  readonly optionNone: ToField<Option<"u64">>;
  readonly balanceGeneric: ToField<Balance<T>>;
  readonly optionGeneric: ToField<Option<U>>;
  readonly optionGenericNone: ToField<Option<U>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, ToTypeStr<U>],
    fields: WithSpecialTypesFields<T, U>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithSpecialTypes.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithSpecialTypes<${PhantomToTypeStr<T>}, ${ToTypeStr<U>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.string = fields.string;
    this.asciiString = fields.asciiString;
    this.url = fields.url;
    this.idField = fields.idField;
    this.uid = fields.uid;
    this.balance = fields.balance;
    this.option = fields.option;
    this.optionObj = fields.optionObj;
    this.optionNone = fields.optionNone;
    this.balanceGeneric = fields.balanceGeneric;
    this.optionGeneric = fields.optionGeneric;
    this.optionGenericNone = fields.optionGenericNone;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(T: T, U: U): WithSpecialTypesReified<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    return {
      typeName: WithSpecialTypes.$typeName,
      fullTypeName: composeSuiType(
        WithSpecialTypes.$typeName,
        ...[extractType(T), extractType(U)],
      ) as `${typeof PKG_V1}::fixture::WithSpecialTypes<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${ToTypeStr<ToTypeArgument<U>>}>`,
      typeArgs: [extractType(T), extractType(U)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        ToTypeStr<ToTypeArgument<U>>,
      ],
      isPhantom: WithSpecialTypes.$isPhantom,
      reifiedTypeArgs: [T, U],
      fromFields: (fields: Record<string, any>) => WithSpecialTypes.fromFields([T, U], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithSpecialTypes.fromFieldsWithTypes([T, U], item),
      fromBcs: (data: Uint8Array) => WithSpecialTypes.fromBcs([T, U], data),
      bcs: WithSpecialTypes.bcs(toBcs(U)),
      fromJSONField: (field: any) => WithSpecialTypes.fromJSONField([T, U], field),
      fromJSON: (json: Record<string, any>) => WithSpecialTypes.fromJSON([T, U], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithSpecialTypes.fromSuiParsedData([T, U], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithSpecialTypes.fromSuiObjectData([T, U], content),
      fetch: async (client: SuiClient, id: string) => WithSpecialTypes.fetch(client, [T, U], id),
      new: (fields: WithSpecialTypesFields<ToPhantomTypeArgument<T>, ToTypeArgument<U>>) => {
        return new WithSpecialTypes([extractType(T), extractType(U)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithSpecialTypes.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    T: T,
    U: U,
  ): PhantomReified<ToTypeStr<WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>>>> {
    return phantom(WithSpecialTypes.reified(T, U));
  }
  static get p() {
    return WithSpecialTypes.phantom;
  }

  static get bcs() {
    return <U extends BcsType<any>>(U: U) =>
      bcs.struct(`WithSpecialTypes<${U.name}>`, {
        id: UID.bcs,
        string: String.bcs,
        ascii_string: String1.bcs,
        url: Url.bcs,
        id_field: ID.bcs,
        uid: UID.bcs,
        balance: Balance.bcs,
        option: Option.bcs(bcs.u64()),
        option_obj: Option.bcs(Bar1.bcs),
        option_none: Option.bcs(bcs.u64()),
        balance_generic: Balance.bcs,
        option_generic: Option.bcs(U),
        option_generic_none: Option.bcs(U),
      });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    fields: Record<string, any>,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithSpecialTypes.reified(typeArg0, typeArg1).new({
      id: decodeFromFields(UID.reified(), fields.id),
      string: decodeFromFields(String.reified(), fields.string),
      asciiString: decodeFromFields(String1.reified(), fields.ascii_string),
      url: decodeFromFields(Url.reified(), fields.url),
      idField: decodeFromFields(ID.reified(), fields.id_field),
      uid: decodeFromFields(UID.reified(), fields.uid),
      balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance),
      option: decodeFromFields(Option.reified("u64"), fields.option),
      optionObj: decodeFromFields(Option.reified(Bar1.reified()), fields.option_obj),
      optionNone: decodeFromFields(Option.reified("u64"), fields.option_none),
      balanceGeneric: decodeFromFields(Balance.reified(typeArg0), fields.balance_generic),
      optionGeneric: decodeFromFields(Option.reified(typeArg1), fields.option_generic),
      optionGenericNone: decodeFromFields(Option.reified(typeArg1), fields.option_generic_none),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    item: FieldsWithTypes,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    if (!isWithSpecialTypes(item.type)) {
      throw new Error("not a WithSpecialTypes type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return WithSpecialTypes.reified(typeArg0, typeArg1).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      string: decodeFromFieldsWithTypes(String.reified(), item.fields.string),
      asciiString: decodeFromFieldsWithTypes(String1.reified(), item.fields.ascii_string),
      url: decodeFromFieldsWithTypes(Url.reified(), item.fields.url),
      idField: decodeFromFieldsWithTypes(ID.reified(), item.fields.id_field),
      uid: decodeFromFieldsWithTypes(UID.reified(), item.fields.uid),
      balance: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.balance,
      ),
      option: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.option),
      optionObj: decodeFromFieldsWithTypes(Option.reified(Bar1.reified()), item.fields.option_obj),
      optionNone: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.option_none),
      balanceGeneric: decodeFromFieldsWithTypes(
        Balance.reified(typeArg0),
        item.fields.balance_generic,
      ),
      optionGeneric: decodeFromFieldsWithTypes(
        Option.reified(typeArg1),
        item.fields.option_generic,
      ),
      optionGenericNone: decodeFromFieldsWithTypes(
        Option.reified(typeArg1),
        item.fields.option_generic_none,
      ),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    data: Uint8Array,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithSpecialTypes.fromFields(
      [typeArg0, typeArg1],
      WithSpecialTypes.bcs(toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      id: this.id,
      string: this.string,
      asciiString: this.asciiString,
      url: this.url,
      idField: this.idField,
      uid: this.uid,
      balance: this.balance.toJSONField(),
      option: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.option),
      optionObj: fieldToJSON<Option<Bar1>>(
        `${Option.$typeName}<${Bar1.$typeName}>`,
        this.optionObj,
      ),
      optionNone: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.optionNone),
      balanceGeneric: this.balanceGeneric.toJSONField(),
      optionGeneric: fieldToJSON<Option<U>>(`${Option.$typeName}<${typeArg1}>`, this.optionGeneric),
      optionGenericNone: fieldToJSON<Option<U>>(
        `${Option.$typeName}<${typeArg1}>`,
        this.optionGenericNone,
      ),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(typeArgs: [T, U], field: any): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithSpecialTypes.reified(typeArg0, typeArg1).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      string: decodeFromJSONField(String.reified(), field.string),
      asciiString: decodeFromJSONField(String1.reified(), field.asciiString),
      url: decodeFromJSONField(Url.reified(), field.url),
      idField: decodeFromJSONField(ID.reified(), field.idField),
      uid: decodeFromJSONField(UID.reified(), field.uid),
      balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance),
      option: decodeFromJSONField(Option.reified("u64"), field.option),
      optionObj: decodeFromJSONField(Option.reified(Bar1.reified()), field.optionObj),
      optionNone: decodeFromJSONField(Option.reified("u64"), field.optionNone),
      balanceGeneric: decodeFromJSONField(Balance.reified(typeArg0), field.balanceGeneric),
      optionGeneric: decodeFromJSONField(Option.reified(typeArg1), field.optionGeneric),
      optionGenericNone: decodeFromJSONField(Option.reified(typeArg1), field.optionGenericNone),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    json: Record<string, any>,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    if (json.$typeName !== WithSpecialTypes.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(WithSpecialTypes.$typeName, ...[typeArg0, typeArg1].map(extractType)),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return WithSpecialTypes.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    content: SuiParsedData,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithSpecialTypes(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a WithSpecialTypes object`);
    }
    return WithSpecialTypes.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    data: SuiObjectData,
  ): WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWithSpecialTypes(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a WithSpecialTypes object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return WithSpecialTypes.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithSpecialTypes.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    U extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [T, U],
    id: string,
  ): Promise<WithSpecialTypes<ToPhantomTypeArgument<T>, ToTypeArgument<U>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching WithSpecialTypes object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isWithSpecialTypes(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a WithSpecialTypes object`);
    }

    return WithSpecialTypes.fromSuiObjectData(typeArgs, res.data);
  }
}
